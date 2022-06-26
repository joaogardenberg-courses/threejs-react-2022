import { useThree } from '@react-three/fiber'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  GodRays
} from '@react-three/postprocessing'
import { useEffect, useState } from 'react'

export default function Effects() {
  const { scene } = useThree()
  const [lights, setLights] = useState()

  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) {
      setLights(scene.lights)
    }
  }, [scene.lights])

  return lights ? (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
      {lights.map((light) => (
        <GodRays key={light.current.uuid} sun={light.current} />
      ))}
    </EffectComposer>
  ) : null
}
