import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls, Preload, useGLTF, HemisphereLight, PointLight, SpotLight } from "@react-three/drei";


import CanvasLoader from '../Loader';

const Islands = () => {

  const island = useGLTF('./floating_island/scene.gltf')

  return (
    <mesh>
      <HemisphereLight intensity={0.15} groundColor='black' />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <PointLight intensity={1} />
      
      <Primitive
        object={island.scene}
        scale = {0.75}
        position = {[0, -3.25, -1.5]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const IslandCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: True}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Islands />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Islands