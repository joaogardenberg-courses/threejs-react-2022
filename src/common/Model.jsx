import { FrontSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function Model({ path, ...props }) {
  const model = useLoader(GLTFLoader, path)

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = FrontSide
    }
  })

  return <primitive {...props} object={model.scene} />
}
