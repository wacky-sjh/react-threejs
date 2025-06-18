import SceneWrapper from "../SceneWrapper";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import type { MeshStandardMaterial } from "three";

function Model() {
  // glb 파일 경로를 import.meta.url 기준으로 생성 (vite 환경에서 사용)
  // @ts-ignore
  const glbUrl = new URL("../../assets/glb/table.glb", import.meta.url).href;
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
    <SceneWrapper
      camera={{ position: [2, 2, 4], fov: 50 }}
      lights={
        <>
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 2, 2]} intensity={0.3} />
        </>
      }
      environment={<Environment preset="city" />}
      controls={<OrbitControls enablePan={false} />}
    >
      <Model />
    </SceneWrapper>
  );
}
