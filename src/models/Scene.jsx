import React from "react";
import Airplane from "./Airplane";
import BoxSpawner from "./BoxSpawner";

const Scene = () => {
  return (
    <mesh>
      <Airplane />
      <BoxSpawner />
    </mesh>
  );
};

export default Scene;
