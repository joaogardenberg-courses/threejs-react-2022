import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Orbit from '../common/Orbit'
import Bulb from '../common/Bulb'
import Background from '../common/Background'
import Draggable from '../common/Draggable'
import PhysicalFloor from '../common/PhysicalFloor'
import Cars from '../common/Cars'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        <Orbit />
        <axesHelper args={[3]} />
        <ambientLight intensity={0.2} />
        <Draggable>
          <Bulb position={[0, 3, 0]} />
        </Draggable>
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}
        <Background />
        <Physics>
          <PhysicalFloor position={[0, -0.5, 0]} />
          <Cars visibleBoundingBoxes />
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
