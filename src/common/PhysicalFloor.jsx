import { useBox } from '@react-three/cannon'
import Floor from './Floor'

export default function PhysicalFloor({
  geometryArgs = [20, 1, 10],
  opacity = 1,
  ...props
}) {
  const [ref] = useBox(() => ({ args: geometryArgs, ...props }))
  return <Floor geometryArgs={geometryArgs} opacity={opacity} ref={ref} />
}
