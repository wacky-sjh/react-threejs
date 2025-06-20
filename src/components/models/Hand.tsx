import SceneWrapper from "../SceneWrapper";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  // glb 파일 경로를 import.meta.url 기준으로 생성 (vite 환경에서 사용)
  // @ts-ignore
  const glbUrl = new URL("../../assets/glb/hand_test_2.glb", import.meta.url).href;
  const { scene } = useGLTF(glbUrl);

  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      // Mesh 이름 출력
      // console.log(obj.name);
    }
  });

  return <primitive object={scene} />;
}

export default function Hand() {
  return (
    <SceneWrapper
      camera={{ position: [0, 0, 5], fov: 65 }}
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
