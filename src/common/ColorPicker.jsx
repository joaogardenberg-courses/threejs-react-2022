import { Color } from 'three'

export default function ColorPicker() {
  const handleClick = (e) => {
    if (!window.activeMesh) {
      return
    }

    window.activeMesh.material.color = new Color(e.target.style.backgroundColor)
  }

  return (
    <div style={{ position: 'absolute', zIndex: 1 }}>
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
