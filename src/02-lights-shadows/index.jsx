import { Canvas } from '@react-three/fiber'
import Orbit from '../common/Orbit'
import Bulb from '../common/Bulb'
import Floor from '../common/Floor'
import Box from './Box'

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
