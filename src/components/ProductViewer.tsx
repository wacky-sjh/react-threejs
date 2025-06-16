import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  // glb 파일 경로는 public이 아닌 src/assets라서 import 필요
  // vite에서는 import.meta.url을 활용
  // 하지만 일반적으로 public 폴더에 두는 것이 더 간단합니다.
  // src/assets에 둘 경우 아래처럼 import
  // @ts-ignore
  const glbUrl = new URL("../assets/glb/table.glb", import.meta.url).href;
  const { scene } = useGLTF(glbUrl);
  return <primitive object={scene} />;
}

export default function ProductViewer() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
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
