import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

const Box = ({ position, args, innerRef }) => {
  // useFrame((_, delta) => {
  //   const animationId = () => (boxRef.current.position.x -= 30 * delta);
  //   return animationId();
  // });

  return (
    <RigidBody colliders={"cuboid"}>
      <mesh ref={innerRef} position={[250, 0, 0]}>
        <boxGeometry args={[20, 20, 0]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </RigidBody>
  );
};

export default Box;
