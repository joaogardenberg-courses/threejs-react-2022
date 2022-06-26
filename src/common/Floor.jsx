import { forwardRef } from 'react'

export default forwardRef(({ geometryArgs = [20, 1, 10], ...props }, ref) => {
  return (
    <mesh receiveShadow {...props} ref={ref}>
      <boxBufferGeometry args={geometryArgs} />
      <meshPhysicalMaterial />
    </mesh>
  )
})
