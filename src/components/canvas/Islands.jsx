import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from '../Loader';

const Islands = ({ isMobile }) => {

  const { scene } = useGLTF('./floating_island/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='#9ac1e6' />
      <spotLight
        position={[-0, -8, 1]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      <primitive
        object={scene}
        scale = {isMobile? 0.0045 : 0.008}
        position = {isMobile?  [-1, -3.5, 0] :[0, -7.5, 0]}
        rotation = {[-0.01, -0.1, -0.05]}
      />
    </mesh>
  );
};

const IslandsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [0, 20, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={0.5}
        />
        <Islands isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default IslandsCanvas;