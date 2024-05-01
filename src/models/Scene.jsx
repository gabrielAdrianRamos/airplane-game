import React, { useRef } from "react";
import Airplane from "./Airplane";
import BoxSpawner from "./BoxSpawner";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const planeRef = useRef();
  const boxRef = useRef();

  const adjustAirplaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0, -1.6, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [-1.5, -0.5, 0];
    } else {
      screenScale = [10, 10, 10];
      screenPosition = [-250, 0, 0];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [airPlaneScale, airPlanePosition, rotation] =
    adjustAirplaneForScreenSize();

  return (
    <mesh>
      <Airplane
        ref={planeRef}
        scale={airPlaneScale}
        position={airPlanePosition}
        rotation={rotation}
      />
      <BoxSpawner ref={boxRef} args={[20, 20, 0]} />
    </mesh>
  );
};

export default Scene;
