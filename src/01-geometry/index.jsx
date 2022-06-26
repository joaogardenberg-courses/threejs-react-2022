import { useMemo } from 'react'
import { BufferAttribute, DoubleSide } from 'three'
import { Canvas } from '@react-three/fiber'
import Orbit from '../common/Orbit'
import Box from './Box'

export default function App() {
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
