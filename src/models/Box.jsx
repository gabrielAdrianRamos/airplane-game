import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = (props) => {
  const boxRef = useRef();

  const minm = -200;
  const maxm = 200;
  const randomPosY = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  const posY = randomPosY;

  useFrame((_, delta) => {
    boxRef.current.position.x -= 30 * delta;
  });

  return (
    <mesh ref={boxRef} {...props} position={[400, posY, 0]}>
      <boxGeometry scale={props} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Box;
