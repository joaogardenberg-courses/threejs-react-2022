import { useBox } from '@react-three/cannon'

export default function Floor(props) {
  const args = [20, 1, 10]
  const [ref] = useBox(() => ({ args, ...props }))

  return (
    <mesh receiveShadow {...props} ref={ref}>
      <boxBufferGeometry args={args} />
      <meshPhysicalMaterial />
    </mesh>
  )
}
