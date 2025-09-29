// src/components/CarModel/CarModel.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// 1. IMPORT THÊM Circle và ContactShadows
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
  const modelPosition = [0.5, 0, 0]; // Dịch sang phải 0.5 đơn vị

  return (
    <div className="car-model-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [32, 30, 40], fov: 40 }}
      >
        <Suspense fallback={null}>
          {/* --- HỆ THỐNG ÁNH SÁNG (Giữ nguyên) --- */}
          <ambientLight intensity={0.5} color="#175186" />
          <hemisphereLight
            intensity={1.5}
            color={"#00aeff"}
            groundColor={"#274191"}
          />
          <directionalLight
            position={[5, 5, 5]}
            intensity={4.0} // Tăng từ 2.5 -> 4.0
            color="#ffffff"
          />
          <directionalLight
            position={[-5, 3, 5]}
            intensity={1.5}
            color="#ffffff"
          />

          <group position-x={[0]}>
            <Model />

            {/* === 2. THÊM ĐẾ VÀ BÓNG ĐỔ === */}

            {/* Tạo bóng đổ mềm, chân thực ngay dưới bánh xe */}
            <ContactShadows
              position={[0, 0, 0]}
              scale={10}
              far={3}
              blur={1.5}
              // Tăng độ đậm của bóng đổ
              opacity={0.85}
            />

            {/* Tạo một mặt đế hình tròn nằm phẳng */}
            <Circle
              args={[14]} // Bán kính và số phân đoạn
              rotation-x={-Math.PI / 2}
              position={[0, -0.7, 1]} // Đặt đế ngay tại gốc tọa độ
            >
              {/* Vật liệu này không cần ánh sáng vẫn sáng rực */}
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
            // Mở lại góc nhìn một chút để có thể xem từ trên xuống
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
            // Giới hạn khoảng cách zoom
            minDistance={4}
            maxDistance={45}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarModel;
