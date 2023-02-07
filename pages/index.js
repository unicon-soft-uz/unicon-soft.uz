import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';

function Model(props) {
  const torusRef = useRef();
  useFrame(() => {
    // torusRef.current.rotation.x += 0.03;
    torusRef.current.rotation.y += 0.024;
  });
  const { scene } = useGLTF('/unicon_soft_remake.glb');
  console.log({ scene });
  return <primitive ref={torusRef} object={scene} {...props} />;
}

export default function Model3d() {
  return (
    <div className="App">
      <div className="globe">
        <Canvas
          style={{
            position: 'relative',
          }}
        >
          <PresentationControls speed={1.5} global zoom={0.5}>
            <Stage fallback={null}>
              <Model scale={0.003} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}
