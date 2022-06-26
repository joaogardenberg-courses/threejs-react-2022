import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function Model({ path, ...props }) {
  const model = useLoader(GLTFLoader, path)
  return <primitive {...props} object={model.scene} />
}
