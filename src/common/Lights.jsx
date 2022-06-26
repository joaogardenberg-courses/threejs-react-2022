import Bulb from '../common/Bulb'
import Draggable from '../common/Draggable'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
      />
      <Draggable>
        <Bulb position={[-6, 3, 0]} />
        <Bulb position={[0, 3, 0]} />
        <Bulb position={[6, 3, 0]} />
      </Draggable>
    </>
  )
}
