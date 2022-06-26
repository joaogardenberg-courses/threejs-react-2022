import { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { DoubleSide } from 'three'
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
        camera={{ position: [1, 5, 1] }}
        shadows
      >
        <Orbit />
        <axesHelper args={[3]} />
        <ambientLight intensity={0.2} />
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}
        <Bulb position={[0, 3, 0]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  )
}

export default App
