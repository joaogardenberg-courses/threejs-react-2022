import { Suspense, useRef } from 'react'
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree
} from '@react-three/fiber'
import { TextureLoader, WebGLCubeRenderTarget } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Orbit = () => {
  const { camera, gl } = useThree()
  return <orbitControls args={[camera, gl.domElement]} />
}

const Box = (props) => {
  const ref = useRef()
  const texture = useLoader(TextureLoader, '/world.jpg')

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} castShadow receiveShadow {...props}>
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

const Background = (props) => {
  const { gl } = useThree()
  const texture = useLoader(TextureLoader, '/autoshop.jpg')

  const formatted = new WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture)

  return <primitive attach="background" object={formatted.texture} />
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
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}
        <Bulb position={[0, 3, 0]} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  )
}

export default App
