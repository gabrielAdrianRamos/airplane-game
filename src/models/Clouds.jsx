import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Clouds = ({ isMoving }) => {
  const sky = useGLTF("/cloud.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.09 * delta;
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Clouds;
