import * as STDLIB from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import React, { forwardRef } from 'react';

const { GLTFLoader } = STDLIB;

const Mesh = forwardRef(function Meshu({ ref, url, ...otherProps }) {
  const gltf = useLoader(GLTFLoader, url);
  console.log('model', gltf);
  return (
    <mesh ref={ref} {...otherProps}>
      <primitive object={gltf.scene} />
    </mesh>
  );
});

export default Mesh;
