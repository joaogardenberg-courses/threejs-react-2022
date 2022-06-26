export default function Bulb(props) {
  return (
    <mesh {...props}>
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
