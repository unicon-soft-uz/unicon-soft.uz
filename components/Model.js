import { useRef, Suspense } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Model(props) {
  const torusRef = useRef();
  useFrame(() => {
    torusRef.current.rotation.y += 0.024;
  });
  const { scene } = useGLTF('/unicon_soft_remake.glb');
  return <primitive ref={torusRef} object={scene} {...props} />;
}

function LightBulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
    </mesh>
  );
}
export default function Model3d() {
  return (
    <>
      <mesh
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Canvas
          style={{
            width: '35vw',
            height: '35vw',
          }}
          camera={{
            position: [0, 3, 6],
            zoom: 1.75,
          }}
        >
          <LightBulb position={[3, 3, 3]} />
          <LightBulb position={[-3, 3, -6]} />
          <LightBulb position={[-3, 3, 2]} />
          <LightBulb position={[3, 3, -6]} />
          <Model position={[0, -1.6, 0]} />
          <OrbitControls
            minAzimuthAngle={Math.PI}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 2}
            enableZoom={false}
          />
        </Canvas>
      </mesh>
    </>
  );
}
