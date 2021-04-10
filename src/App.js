import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import dog from "./assets/dog.jpg";
import "./App.css";

function Box() {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, dog);

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={mesh}>
      <meshStandardMaterial map={texture} attach="material" color="skyblue" />
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 0, 0]} />
      <Suspense fallback="...loading">
        <Box />
      </Suspense>
    </Canvas>
  );
}

export default App;
