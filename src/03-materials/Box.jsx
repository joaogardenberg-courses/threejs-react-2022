import { useRef } from 'react'
import { DoubleSide } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} castShadow {...props}>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        // fog={false}
        transparent
        opacity={0.5}
        // metalness={1}
        roughness={0}
        clearcoat={1}
        transmission={0.5}
        reflectivity={1}
        side={DoubleSide}
      />
    </mesh>
  )
}
