import React, { useRef } from "react";
import Airplane from "./Airplane";
import BoxSpawner from "./BoxSpawner";
import Box from "./Box";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "../App";
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

  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  useFrame((_state, delta) => {
    leftPressed && (planeRef.current.position.x -= 50 * delta);
    rightPressed && (planeRef.current.position.x += 50 * delta);
    forwardPressed && (planeRef.current.position.y += 50 * delta);
    backPressed && (planeRef.current.position.y -= 50 * delta);

    boxRef.current.position.x -= 30 * delta;
  });

  return (
    <>
      <Airplane
        innerRef={planeRef}
        scale={airPlaneScale}
        position={airPlanePosition}
        rotation={rotation}
      />
      {/* <BoxSpawner args={[20, 20, 0]} /> */}
      <Box innerRef={boxRef} />
    </>
  );
};

export default Scene;
