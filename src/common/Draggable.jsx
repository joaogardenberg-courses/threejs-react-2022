import { useEffect, useRef, useState } from 'react'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { extend, useThree } from '@react-three/fiber'

extend({ DragControls })

export default function Draggable({ children }) {
  const groupRef = useRef()
  const controlsRef = useRef()
  const { camera, gl, scene } = useThree()
  const [meshes, setMeshes] = useState([])

  useEffect(() => {
    setMeshes(groupRef.current.children)
  }, [])

  useEffect(() => {
    const controlsElement = controlsRef.current

    const enableOrbit = () => (scene.orbitControls.enabled = true)

    const disableOrbit = () => (scene.orbitControls.enabled = false)

    const onDrag = (e) => {
      e.object.api?.position.copy(e.object.position)
      e.object.api?.velocity.set(0, 0, 0)
    }

    const onDragStart = (e) => e.object.api?.mass.set(0)

    const onDragEnd = (e) => e.object.api?.mass.set(1)

    controlsElement.addEventListener('hoveron', disableOrbit)
    controlsElement.addEventListener('hoveroff', enableOrbit)
    controlsElement.addEventListener('drag', onDrag)
    controlsElement.addEventListener('dragstart', onDragStart)
    controlsElement.addEventListener('dragend', onDragEnd)

    return () => {
      controlsElement.removeEventListener('hoveron', disableOrbit)
      controlsElement.removeEventListener('hoveroff', enableOrbit)
      controlsElement.removeEventListener('drag', onDrag)
      controlsElement.removeEventListener('dragstart', onDragStart)
      controlsElement.removeEventListener('dragend', onDragEnd)
    }
  }, [meshes, controlsRef, scene.orbitControls])

  return (
    <group ref={groupRef}>
      <dragControls args={[meshes, camera, gl.domElement]} ref={controlsRef} />
      {children}
    </group>
  )
}
