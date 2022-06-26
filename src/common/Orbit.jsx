import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { extend, useThree } from '@react-three/fiber'

extend({ OrbitControls })

export default function Orbit(props) {
  const ref = useRef()
  const { camera, gl } = useThree()

  useEffect(() => {
    ref.current.enabled = true
  }, [])

  return (
    <orbitControls
      {...props}
      attach="orbitControls"
      args={[camera, gl.domElement]}
      enabled={false}
      ref={ref}
    />
  )
}
