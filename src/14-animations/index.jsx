import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Orbit from '../common/Orbit'
import Background from '../common/Background'
import PhysicalFloor from '../common/PhysicalFloor'
import Cars from '../common/Cars'
import CameraControls from '../common/CameraControls'
import CameraButtons from '../common/CameraButtons'
import ColorPicker from '../common/ColorPicker'
import Lights from '../common/Lights'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        <CameraControls />
        <Orbit />
        <axesHelper args={[3]} />
        <Lights />
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}
        <Background />
        <Physics>
          <PhysicalFloor position={[0, -0.5, 0]} />
          <Cars />
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
