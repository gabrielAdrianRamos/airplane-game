import "./App.css";
import { Canvas } from "@react-three/fiber";
import Clouds from "./models/Clouds";
import Scene from "./models/Scene";

function App() {
  return (
    <section className="container">
      <Canvas className="canvas" orthographic camera={{ zoom: 2 }}>
        <directionalLight position={[1, 2, 1]} intensity={2} />
        <ambientLight intensity={2} />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <Clouds />
        <Scene />
      </Canvas>
    </section>
  );
}

export default App;
