import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function Model() {
  // glb 파일 경로를 import.meta.url 기준으로 생성 (vite 환경에서 사용)
  // @ts-ignore
  const glbUrl = new URL("../assets/glb/iphone.glb", import.meta.url).href;
  const { scene } = useGLTF(glbUrl);

  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      // Mesh 이름 출력
      // console.log(obj.name);
    }
  });

  return <primitive object={scene} />;
}

export default function Iphone() {
  return (
    <div
      style={{
        width: "80vw",
        height: "70vh",
        background: "white",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 2, 2]} intensity={0.3} />
          <Environment preset="city" />
          <Model />
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
