import { Canvas } from '@react-three/fiber'
import Orbit from '../common/Orbit'
import Bulb from '../common/Bulb'
import Floor from '../common/Floor'
import Background from '../common/Background'
import World from './World'

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
        <Background />
        <Floor position={[0, -0.5, 0]} />
        <Bulb position={[0, 3, 0]} />
        <World position={[0, 1, 0]} />
      </Canvas>
    </div>
  )
}

export default App
