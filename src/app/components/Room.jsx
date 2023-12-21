'use client';
import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three-stdlib';
const Mesh = dynamic(() => import('./Mesh'), { ssr: false });

const Room = (props) => {
  const model = useLoader(GLTFLoader, '/models/room/source/model.gltf');

  return (
    <group>
      {/* <OrbitControls /> */}
      <ambientLight />
      <orthographicCamera zoom={100} position={[0, 0, 25]} />
      <mesh
        scale={[1.5, 1.5, 1.5]}
        position={[-1.5, 0, 0]}
        rotation={[Math.PI / 5, Math.PI / 1.5, 0]}
      >
        <primitive object={model.scene} />
      </mesh>
      {/* <axesHelper /> */}
    </group>
  );
};

export default Room;
