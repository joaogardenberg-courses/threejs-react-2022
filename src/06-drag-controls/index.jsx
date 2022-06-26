import { Canvas } from '@react-three/fiber'
import ColorPicker from '../common/ColorPicker'
import Orbit from '../common/Orbit'
import Bulb from '../common/Bulb'
import Floor from '../common/Floor'
import Background from '../common/Background'
import Draggable from '../common/Draggable'
import Box from './Box'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker />
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        <Orbit />
        <axesHelper args={[3]} />
        <ambientLight intensity={0.2} />
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}
        <Background />
        <Floor position={[0, -0.5, 0]} />
        <Draggable>
          <Bulb position={[0, 3, 0]} />
          <Box position={[-4, 1, 0]} />
          <Box position={[4, 1, 0]} />
        </Draggable>
      </Canvas>
    </div>
  )
}

export default App
