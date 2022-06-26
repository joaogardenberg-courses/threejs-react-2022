import { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
    <mesh ref={ref} castShadow receiveShadow {...props}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="blue" />
    </mesh>
  )
}

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  )
}

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  )
}

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        <Orbit />
        <axesHelper args={[3]} />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Box position={[-1, 1, 2]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  )
}

export default App
