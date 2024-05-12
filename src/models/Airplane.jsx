import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Airplane = (props) => {
  const { scene } = useGLTF("/animatedairplane.glb");

  return (
    <RigidBody
      sensor
      colliders={"ball"}
      onCollisionEnter={() => console.log("entering")}
    >
      <mesh ref={props.innerRef}>
        {/* <primitive
          object={scene}
          scale={props.scale}
          position={props.position}
          rotation={props.rotation}
          ref={props.innerRef}
        /> */}
        <boxGeometry args={[20, 20, 0]} position={[-250, 0, 0]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </RigidBody>
  );
};

export default Airplane;
