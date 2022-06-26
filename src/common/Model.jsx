import { AnimationMixer, FrontSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Model({ path, ...props }) {
  const model = useLoader(GLTFLoader, path)
  let mixer

  if (model.animations.length) {
    mixer = new AnimationMixer(model.scene)
    model.animations.forEach((clip) => mixer.clipAction(clip).play())
  }

  useFrame((_, delta) => mixer?.update(delta))

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = FrontSide
    }
  })

  return <primitive {...props} object={model.scene} />
}
