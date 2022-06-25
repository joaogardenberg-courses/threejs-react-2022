import { useMemo, useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BufferAttribute, DoubleSide } from 'three'

extend({ OrbitControls })

const Orbit = () => {
  const { camera, gl } = useThree()
  return <orbitControls args={[camera, gl.domElement]} />
}

const Box = (props) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  )
}

const App = () => {
  const vertices = useMemo(
    () =>
      new BufferAttribute(new Float32Array([0, 0, 0, 0, 1, 1, 0, 1, -1]), 3),
    []
  )

  const indices = useMemo(
    () => new BufferAttribute(new Uint16Array([0, 1, 2]), 1),
    []
  )

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas style={{ background: 'black' }} camera={{ position: [3, 3, 3] }}>
        <Orbit />
        <axesHelper args={[3]} />
        <Box position={[-1, 1, 2]} />
        <mesh>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" {...vertices} />
            <bufferAttribute attach="index" {...indices} />
          </bufferGeometry>
          <meshBasicMaterial side={DoubleSide} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
