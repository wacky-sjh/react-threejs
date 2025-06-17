import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";
import type { MeshStandardMaterial } from "three";

function Model() {
  // glb 파일 경로를 import.meta.url 기준으로 생성 (vite 환경에서 사용)
  // 일반적으로 public 폴더에 두는 것이 더 간단하지만, src/assets에 둘 경우 아래처럼 import
  // @ts-ignore
  const glbUrl = new URL("../assets/glb/table.glb", import.meta.url).href;
  const { scene, nodes } = useGLTF(glbUrl);

  // 옵션: 재질 속성 변경
  if (nodes.table_2 && "material" in nodes.table_2) {
    const mat = nodes.table_2.material as MeshStandardMaterial;
    mat.metalness = 1; // 금속성(1: 완전 금속)
    mat.roughness = 0.2; // 거칠기(0: 매끈, 1: 거칠)
  }

  // 전체 씬(scene)을 primitive로 렌더링
  return <primitive object={scene} />;
}

export default function Table() {
  return (
    <div
      style={{
        width: "80vw",
        height: "70vh",
        background: "#ffffff",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 2, 2]} intensity={0.3} />
          {/* 환경맵(조명/반사/배경) city 프리셋 적용 */}
          <Environment preset="city" />
          {/* 3D 모델 컴포넌트 렌더링 */}
          <Model />
          {/* 마우스 회전/줌 컨트롤러, 평행이동 비활성화 */}
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
      {/* 3D 모델 등 리소스 로딩 상태를 보여주는 Loader */}
      <Loader />
    </div>
  );
}
