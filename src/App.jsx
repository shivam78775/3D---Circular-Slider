import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={12.0}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
