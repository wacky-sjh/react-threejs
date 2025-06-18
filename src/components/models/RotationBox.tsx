import SceneWrapper from "../SceneWrapper";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function Model() {
  const meshRef = useRef<Mesh>(null);
  // useFrame 훅: 매 프레임마다 이 함수가 실행됩니다.
  useFrame((_state: any, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" roughness={0} metalness={0.1} envMapIntensity={1} />
    </mesh>
  );
}

export default function RotatingBox() {
  return (
    <SceneWrapper
      camera={{ position: [0, 0, 3] }}
      lights={
        <>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
        </>
      }
      environment={<Environment preset="city" />}
      controls={<OrbitControls />}
    >
      <Model />
    </SceneWrapper>
  );
}
