import { Color } from 'three'
import state from '../state'

export default function ColorPicker() {
  const handleClick = (e) => {
    if (!state.activeMesh) {
      return
    }

    state.activeMesh.material.color = new Color(e.target.style.backgroundColor)
  }

  return (
    <div
      style={{
        display: 'flex',
        left: 0,
        margin: 'auto',
        position: 'absolute',
        right: 0,
        top: '20px',
        width: 'fit-content',
        zIndex: 1
      }}
    >
      <div
        style={{ backgroundColor: 'blue', height: '50px', width: '50px' }}
        onClick={handleClick}
      />
      <div
        style={{ backgroundColor: 'red', height: '50px', width: '50px' }}
        onClick={handleClick}
      />
      <div
        style={{ backgroundColor: 'white', height: '50px', width: '50px' }}
        onClick={handleClick}
      />
    </div>
  )
}
