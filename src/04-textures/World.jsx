import { Suspense, useRef } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

export default function World(props) {
  const ref = useRef()
  const texture = useLoader(TextureLoader, '/world.jpg')

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <Suspense fallback={null}>
      <mesh castShadow receiveShadow {...props} ref={ref}>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </Suspense>
  )
}
