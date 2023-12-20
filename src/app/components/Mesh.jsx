import * as STDLIB from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import React, { forwardRef } from 'react';

const { GLTFLoader } = STDLIB;

const Mesh = ({ url, ...otherProps }) => {
  const gltf = useLoader(GLTFLoader, url);
  return (
    <mesh {...otherProps}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Mesh;
