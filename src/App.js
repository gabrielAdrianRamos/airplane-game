import "./App.css";
import { Canvas } from "@react-three/fiber";
import Airplane from "./models/Airplane";
import Clouds from "./models/Clouds";
import Box from "./models/Box";

function App() {
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
        <Box scale={[20, 20, 0]} />
        <Box scale={[20, 20, 0]} />
        <Box scale={[20, 20, 0]} />
        <Box scale={[20, 20, 0]} />
        <Airplane
          scale={airPlaneScale}
          position={airPlanePosition}
          rotation={rotation}
        />
      </Canvas>
    </section>
  );
}

export default App;
