'use client';
import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei';
import { Camera } from 'three';
const Mesh = dynamic(() => import('./Mesh'), { ssr: false });

const Canvas = lazy(() => import('./Canvas'));

const Computer = (props) => {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight />
      <orthographicCamera zoom={100} position={[0, 0, 80]} />
      {/* <Camera zoom={50} /> */}
      <Mesh
        rotation={[Math.PI / 5, Math.PI / 1.5, 0]}
        url={'/models/room/source/model.gltf'}
      />
    </Canvas>
  );
};

export default Computer;
