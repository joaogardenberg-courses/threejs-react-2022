import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh castShadow receiveShadow {...props} ref={ref}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="blue" />
    </mesh>
  )
}
