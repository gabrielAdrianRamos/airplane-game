import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = ({ position, args }) => {
  const boxRef = useRef();

  useFrame((_, delta) => {
    const animationId = () => (boxRef.current.position.x -= 30 * delta);
    return animationId();
  });

  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Box;
