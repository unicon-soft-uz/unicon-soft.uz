import { useRef , Suspense} from 'react';
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


// extend({ OrbitControls });

// function Controls(props) {
//   const { camera, gl } = useThree();
//   return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;
// }

  function LightBulb(props) {
    return (
      <mesh {...props} >
       <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
      </mesh>
    );
  }
export default function Model3d() {
  return (
    <>
     <div style={{padding:"0px", margin: "0px", width: "auto", height: "90vw", background: "#404040" }}>
      <Canvas
      style={{width: "80vw",height: "80vw"}}
        camera={{
        
          position: [7, 5, -5],
        }}>
      
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[3, 3, 3]} />
          <LightBulb position={[-3, 3, 3]} />
          <LightBulb position={[9, 5, -9]} />
          
          <Model />
          <OrbitControls 
           minAzimuthAngle={Math.PI - Math.PI / 6}
           maxAzimuthAngle={Math.PI / 4}
           minPolarAngle={Math.PI / 6}
           maxPolarAngle={Math.PI - Math.PI / 6}
           enableZoom={false}
          />
          
      </Canvas>
      </div>
    </>
  );
}