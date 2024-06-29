// src/App.js
"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const BagModel = () => {

  const Computers = useGLTF('./shopping_bag/scene.gltf')
  return (
  <mesh> 
    <hemisphereLight intensity={0.85} groundColor="sliver"/>
    <pointLight intensity={1}/>
      <primitive object={Computers.scene} scale={0.45} position={[0, -9.25, -1.5]}/>
  </mesh>

  );
};

const ThreeScene2 = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [30, 40, 5], fov: 25 }}
      resize={{ scroll: false }}
      gl={{ preserveDrawingBuffer: true }}
      style={{height : "100%", width:"450px"}}
      
    >
      <ambientLight intensity={1} />
     
      <spotLight position={[0, 0, 0]} />
      <Suspense fallback={null}>
       
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> <BagModel
        
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene2;
