import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Circle,
  ContactShadows,
} from "@react-three/drei";
import "./CarModel.scss";

const Model = () => {
  const { scene } = useGLTF("/vinfast_vf9_model_no_interior.glb");
  return <primitive object={scene} scale={1.5} />;
};

const CarModel = () => {
  const groundY = -0.75;

  return (
    <div className="car-model-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [32, 30, 40], fov: 40 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} color="#175186" />
          <hemisphereLight
            intensity={1.5}
            color={"#00aeff"}
            groundColor={"#274191"}
          />
          <directionalLight
            position={[32, 30, 40]}
            intensity={6.0}
            color="#ffffff"
          />
          <directionalLight
            position={[-5, 3, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight
            position={[-10, 3, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight
            position={[-15, 3, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <group position-y={groundY}>
            <Model />

            <ContactShadows
              position={[0, 0, 0]}
              scale={10}
              far={3}
              blur={1.5}
              opacity={0.85}
            />

            <Circle
              args={[15, 64]}
              rotation-x={-Math.PI / 2}
              position={[0, -0.5, 0]}
            >
              <meshStandardMaterial
                color="#222a3d"
                metalness={0.4}
                roughness={0.6}
              />
            </Circle>
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
            minDistance={4}
            maxDistance={50}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarModel;
