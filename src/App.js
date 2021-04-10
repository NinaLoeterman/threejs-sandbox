import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={mesh}>
      <meshStandardMaterial attach="material" />
      <boxBufferGeometry attach="geometry" color="#fa1852" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{height: "100vh"}}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 0, 0]}/>
      <Box />
    </Canvas>
  );
}

export default App;
