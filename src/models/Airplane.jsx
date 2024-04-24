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
        scale={airPlaneScale}
        position={airPlanePosition}
        rotation={rotation}
      />
    </mesh>
  );
};

export default Airplane;
