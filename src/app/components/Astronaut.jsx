'use client';
import React, {
  Suspense,
  lazy,
  useRef,
  useMemo,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from 'react-three-fiber';
import { useSpring, animated } from '@react-spring/three';
import * as STDLIB from 'three-stdlib';
const { GLTFLoader } = STDLIB;

const Mesh = dynamic(() => import('./Mesh'), { ssr: false });
const Canvas = lazy(() => import('./Canvas'));

const Astronaut = (props) => {
  const meshRef = useRef(null);
  const astronaut = useLoader(
    GLTFLoader,
    '/models/orange_astronaut/source/model.glb'
  );
  const pc = useLoader(GLTFLoader, '/models/old_pc/scene.gltf');
  const degrees = useMemo(
    () =>
      Array(10)
        .fill()
        .map((_, i) => (i % 2 === 0 ? 1 : -1)),
    []
  );

  const { zRotation } = useSpring({
    from: {
      zRotation: 0,
    },
    to: {
      zRotation: -Math.PI / 2,
    },
    from: {
      zRotation: -Math.PI / 2,
    },
    to: [
      degrees.map((d) => ({
        zRotation: d,
      })),
    ],
    loop: true,
  });

  return (
    <group>
      <OrbitControls />
      <ambientLight position={[0, 0, 40]} intensity={1} color={'0xffffff'} />
      <orthographicCamera zoom={100} position={[0, 0, 25]} />
      <animated.mesh
        ref={meshRef}
        scale={[6, 6, 6]}
        position={[-1.5, 0.5, 0]}
        rotation={[0, -Math.PI / 9, 0]}
        rotation-z={zRotation}
      >
        <primitive object={astronaut.scene} />
      </animated.mesh>
      <animated.mesh
        scale={[3, 3, 3]}
        position={[-0.25, 0, 0.5]}
        rotation={[0, -Math.PI - Math.PI / 10, 0]}
      >
        <primitive object={pc.scene} />
      </animated.mesh>
      <axesHelper />
    </group>
  );
};

export default Astronaut;
