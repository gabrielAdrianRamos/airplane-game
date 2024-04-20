import { useAnimations, useGLTF } from "@react-three/drei";
import useKeyboard from "../hooks/useKeyboard";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Airplane = ({ isMoving, setIsMoving, ...props }) => {
  const { scene, animations } = useGLTF("/animatedairplane.glb");
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  // useEffect(() => {
  //   actions["Animation"].play();
  // });

  const keyMap = useKeyboard();
  useFrame((_, delta) => {
    keyMap["KeyA"] && (ref.current.position.x -= 50 * delta);
    keyMap["KeyD"] && (ref.current.position.x += 50 * delta);
    keyMap["KeyS"] && (ref.current.position.y -= 50 * delta);
    keyMap["KeyW"] && (ref.current.position.y += 50 * delta);
  });

  return (
    <mesh ref={ref}>
      <primitive object={scene} {...props} />
    </mesh>
  );
};

export default Airplane;
