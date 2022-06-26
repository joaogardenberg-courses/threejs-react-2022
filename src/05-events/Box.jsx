import { Suspense, useRef } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()
  const texture = useLoader(TextureLoader, '/wood.jpg')

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  const scaleUp = (mesh) => mesh.scale.set(1.5, 1.5, 1.5)

  const scaleDown = (mesh) => mesh.scale.set(1, 1, 1)

  const handlePointerDown = (e) => {
    if (window.activeMesh) {
      window.activeMesh.active = false
      scaleDown(window.activeMesh)
    }

    e.object.active = true
    scaleUp(e.object)
    window.activeMesh = e.object
  }

  const handlePointerEnter = (e) => e.object.active || scaleUp(e.object)

  const handlePointerLeave = (e) => e.object.active || scaleDown(e.object)

  return (
    <Suspense fallback={null}>
      <mesh
        ref={ref}
        castShadow
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </Suspense>
  )
}
