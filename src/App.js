import "./App.css";
import { Canvas } from "@react-three/fiber";
import Clouds from "./models/Clouds";
import Scene from "./models/Scene";
import { Suspense, useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <section className="container">
      <KeyboardControls map={map}>
        <Canvas className="canvas" orthographic camera={{ zoom: 2 }}>
          <directionalLight position={[1, 2, 1]} intensity={2} />
          <ambientLight intensity={2} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Suspense>
            <Physics debug gravity={[0, 0, 0]}>
              <Clouds />
              <Scene />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </section>
  );
}

export default App;
