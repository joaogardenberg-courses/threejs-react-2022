import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

export default function Bulb(props) {
  const ref = useRef()
  const { scene } = useThree()

  useEffect(() => {
    if (scene.lights) {
      scene.lights.push(ref)
    } else {
      scene.lights = [ref]
    }
  }, [])

  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  )
}
