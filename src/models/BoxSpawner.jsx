import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import Box from "./Box";

const BoxSpawner = () => {
  const [spawnRate, setSpawnRate] = useState(250);
  const frames = useRef(0);
  const [enemies, setEnemies] = useState([]);

  //Random Position of Y
  const minm = -180;
  const maxm = 180;
  const randomPosY = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  const posY = randomPosY;

  useFrame(() => {
    if (frames.current % spawnRate === 0) {
      // Adjust spawnRate dynamically
      if (spawnRate > 20) setSpawnRate(spawnRate - 2);

      const newEnemy = (
        <Box
          key={frames.current}
          position={[(Math.random() - -20) * 20, posY, 0]}
          color="red"
        />
      );

      setEnemies((prevEnemies) => [...prevEnemies, newEnemy]);
    }

    frames.current++;
  });
  return <group>{enemies}</group>;
};

export default BoxSpawner;
