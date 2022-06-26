import { Suspense } from 'react'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import state from '../state'

export default function Box(props) {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }))
  const texture = useLoader(TextureLoader, '/wood.jpg')

  const transparentize = (mesh) => (mesh.material.opacity = 0.5)

  const opacify = (mesh) => (mesh.material.opacity = 1)

  const handlePointerDown = (e) => {
    if (state.activeMesh) {
      state.activeMesh.active = false
      opacify(state.activeMesh)
    }

    e.object.active = true
    transparentize(e.object)
    state.activeMesh = e.object
  }

  const handlePointerEnter = (e) => e.object.active || transparentize(e.object)

  const handlePointerLeave = (e) => e.object.active || opacify(e.object)

  return (
    <Suspense fallback={null}>
      <mesh
        castShadow
        {...props}
        ref={ref}
        api={api}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial map={texture} transparent />
      </mesh>
    </Suspense>
  )
}
