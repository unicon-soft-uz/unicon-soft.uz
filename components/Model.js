import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model(props) {
  const torusRef = useRef();
  useFrame(() => {
    torusRef.current.rotation.y += 0.03;
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
      <div className="flex justify-center">
        <Canvas
          style={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: '1',

            width: 400,
            height: 400,
          }}
          className="flex sm: w-96 h-80"
          camera={{
            position: [0, 2, 6],
            zoom: 1.75,
          }}
        >
          <LightBulb position={[3, 2, 3]} />
          <LightBulb position={[-3, 2, -6]} />
          <LightBulb position={[-3, 2, 2]} />
          <LightBulb position={[3, 2, -6]} />
          <Model position={[0, -1.6, 0]} />
          <OrbitControls
            minAzimuthAngle={Math.PI}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 2}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </>
  );
}
