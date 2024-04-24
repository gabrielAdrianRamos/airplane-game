import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = ({ position }) => {
  const boxRef = useRef();

  useFrame((_, delta) => {
    const animationId = () => (boxRef.current.position.x -= 30 * delta);
    return animationId();
  });

  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry args={[20, 20, 0]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Box;
