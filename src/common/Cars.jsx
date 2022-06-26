import Draggable from '../common/Draggable'
import Model from '../common/Model'
import BoundingBox from '../common/BoundingBox'

export default function Cars() {
  return (
    <>
      <Draggable transformGroup>
        <BoundingBox
          position={[4, 4, 0]}
          dims={[3, 2, 6.1]}
          offset={[0, -0.4, 0.75]}
        >
          <Model path="/tesla_model_3/scene.gltf" scale={[0.01, 0.01, 0.01]} />
        </BoundingBox>
      </Draggable>
      <Draggable transformGroup>
        <BoundingBox
          position={[-4, 4, 0]}
          dims={[3, 2, 6.8]}
          offset={[0, -0.8, 0.2]}
        >
          <Model path="/tesla_model_S/scene.gltf" scale={[0.8, 0.8, 0.8]} />
        </BoundingBox>
      </Draggable>
    </>
  )
}
