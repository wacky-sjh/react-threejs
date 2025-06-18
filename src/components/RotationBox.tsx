import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function Model() {
  const meshRef = useRef<Mesh>(null);

  // useFrame 훅: 매 프레임마다 이 함수가 실행됩니다.
  useFrame((_, delta) => {
    // state: 씬, 카메라 등 현재 3D 씬의 상태 정보
    // delta: 마지막 프레임 이후 경과한 시간 (애니메이션 속도 조절에 유용)

    // meshRef.current (상자)를 Y축으로 계속 회전시킵니다.
    // delta를 곱하여 컴퓨터 성능과 상관없이 일정한 속도로 회전하게 합니다.
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* 이 상자를 useFrame에서 제어할 것입니다 */}
      <boxGeometry args={[1, 1, 1]} /> {/* 가로/세로/높이 1짜리 상자 */}
      <meshStandardMaterial color="orange" roughness={0} metalness={0.1} envMapIntensity={1} />
    </mesh>
  );
}

// 메인 앱 컴포넌트
function RotatingBox() {
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
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* 3D 씬을 그릴 캔버스 */}
        <ambientLight intensity={0.5} /> {/* 주변광 */}
        <directionalLight position={[1, 1, 1]} intensity={1} /> {/* 방향광 */}
        <Model />
        <OrbitControls /> {/* 마우스로 씬 회전/확대 가능하게 함 */}
        <Environment preset="city" /> {/* 환경맵 추가 */}
      </Canvas>
    </div>
  );
}

export default RotatingBox;
