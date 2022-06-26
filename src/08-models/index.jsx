import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import ColorPicker from '../common/ColorPicker'
import Orbit from '../common/Orbit'
import Bulb from '../common/Bulb'
import Background from '../common/Background'
import Draggable from '../common/Draggable'
import Model from '../common/Model'
import Floor from './Floor'

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
        <Physics>
          <Floor position={[0, -0.5, 0]} />
          <Draggable>
            <Bulb position={[0, 3, 0]} />
            <Model
              path="/tesla_model_3/scene.gltf"
              position={[4, 0.6, 0]}
              scale={[0.01, 0.01, 0.01]}
            />
            <Model
              path="/tesla_model_S/scene.gltf"
              position={[-4, 0.6, 0]}
              scale={[0.8, 0.8, 0.8]}
            />
          </Draggable>
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
