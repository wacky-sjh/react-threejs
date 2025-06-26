import SceneWrapper from "./SceneWrapper";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function PreviewModel({ glbUrl }: { glbUrl: string }) {
  const { scene } = useGLTF(glbUrl);
  return <primitive object={scene} />;
}

export default function Preview({ glbUrl }: { glbUrl: string }) {
  return (
    <SceneWrapper
      camera={{ position: [0, 0, 5], fov: 50 }}
      lights={<ambientLight intensity={0.3} />}
      environment={<Environment preset="city" />}
      controls={<OrbitControls enablePan={false} />}
    >
      <PreviewModel glbUrl={glbUrl} />
    </SceneWrapper>
  );
}
