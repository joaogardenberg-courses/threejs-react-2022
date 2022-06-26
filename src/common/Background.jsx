import { Suspense } from 'react'
import { TextureLoader, WebGLCubeRenderTarget } from 'three'
import { useLoader, useThree } from '@react-three/fiber'

export default function Background() {
  const { gl } = useThree()
  const texture = useLoader(TextureLoader, '/autoshop.jpg')

  const formatted = new WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture)

  return (
    <Suspense fallback={null}>
      <primitive attach="background" object={formatted.texture} />
    </Suspense>
  )
}
