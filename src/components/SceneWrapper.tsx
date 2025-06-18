import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import type { ReactNode } from "react";

interface SceneWrapperProps {
  children: ReactNode; // 3D 모델 등
  camera?: object;
  lights?: ReactNode; // 조명
  environment?: ReactNode; // 환경맵
  controls?: ReactNode; // 컨트롤
  showLoader?: boolean;
  style?: React.CSSProperties;
}

export default function SceneWrapper({
  children,
  camera = { position: [0, 0, 3], fov: 50 },
  lights,
  environment,
  controls,
  showLoader = true,
  style = {},
}: SceneWrapperProps) {
  return (
    <div
      style={{
        width: "80vw",
        height: "70vh",
        background: "#fff",
        border: "1px solid gray",
        borderRadius: "10px",
        ...style,
      }}
    >
      <Canvas camera={camera}>
        <Suspense fallback={null}>
          {lights}
          {environment}
          {children}
          {controls}
        </Suspense>
      </Canvas>
      {showLoader && <Loader />}
    </div>
  );
}
