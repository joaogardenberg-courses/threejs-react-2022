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

    controlsElement.addEventListener('hoveron', disableOrbit)
    controlsElement.addEventListener('hoveroff', enableOrbit)

    return () => {
      controlsElement.removeEventListener('hoveron', disableOrbit)
      controlsElement.removeEventListener('hoveroff', enableOrbit)
    }
  }, [meshes, controlsRef, scene.orbitControls])

  return (
    <group ref={groupRef}>
      <dragControls args={[meshes, camera, gl.domElement]} ref={controlsRef} />
      {children}
    </group>
  )
}
