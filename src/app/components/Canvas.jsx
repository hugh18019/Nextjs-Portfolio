import React, { useEffect, useState, useRef } from 'react';
import { Canvas as ThreeCanvas, useFrame } from '@react-three/fiber';

const Canvas = ({ children, ...otherProps }) => {
  return <ThreeCanvas {...otherProps}>{children}</ThreeCanvas>;
};

export default Canvas;
