import { Vector3 } from 'three'
import state from '../state'

const style = {
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '100%',
  bottom: '30vh',
  cursor: 'pointer',
  height: '30px',
  fontSize: '20px',
  fontWeight: 'bold',
  opacity: 0.7,
  position: 'absolute',
  textAlign: 'center',
  width: '30px',
  zIndex: 1
}

export default function CameraButtons() {
  const sets = [
    { cameraPos: [1, 2, 5], target: [-4, 0, 0] },
    { cameraPos: [9, 2, 4], target: [4, 0, 0] }
  ]

  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos)
    state.target.set(...sets[num].target)
    state.shouldUpdate = true
  }

  return (
    <>
      <button style={{ ...style, left: '40vw' }} onClick={() => handleClick(0)}>
        &lt;
      </button>
      <button
        style={{ ...style, right: '40vw' }}
        onClick={() => handleClick(1)}
      >
        &gt;
      </button>
    </>
  )
}
