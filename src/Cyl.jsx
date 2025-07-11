import React, {useRef} from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
  let tex = useTexture("./bg2.png");
  tex.needsUpdate = true;

  let cyl = useRef(null);
  useFrame((state, delta)=>{
      cyl.current.rotation.y 
      += delta;
  })

  
  return (
    <group rotation={[0, 2, 0.2]}>
    <mesh ref={cyl} >
      <cylinderGeometry args={[1,1,1, 50, 50, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
};

export default Cyl;


