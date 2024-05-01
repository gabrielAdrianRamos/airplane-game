import { useGLTF } from "@react-three/drei";
import useKeyboard from "../hooks/useKeyboard";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Airplane = (props) => {
  const { scene, animations } = useGLTF("/animatedairplane.glb");
  const ref = useRef();

  const keyMap = useKeyboard();
  useFrame((_, delta) => {
    keyMap["KeyA"] && (ref.current.position.x -= 50 * delta);
    keyMap["KeyD"] && (ref.current.position.x += 50 * delta);
    keyMap["KeyS"] && (ref.current.position.y -= 50 * delta);
    keyMap["KeyW"] && (ref.current.position.y += 50 * delta);
  });

  return (
    <mesh ref={ref}>
      <primitive
        object={scene}
        scale={props.scale}
        position={props.position}
        rotation={props.rotation}
      />
    </mesh>
  );
};

export default Airplane;
