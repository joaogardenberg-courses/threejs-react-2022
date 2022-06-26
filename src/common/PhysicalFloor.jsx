import { useBox } from '@react-three/cannon'
import Floor from './Floor'

export default function PhysicalFloor(props) {
  const args = [20, 1, 10]
  const [ref] = useBox(() => ({ args, ...props }))
  return <Floor geometryArgs={args} ref={ref} />
}
