# React Three Fiber & Drei 3D 뷰어 핵심 속성 및 세팅 가이드

이 프로젝트는 [react-three/fiber](https://docs.pmnd.rs/react-three-fiber)와 [@react-three/drei](https://docs.pmnd.rs/drei) 라이브러리를 활용해 3D 모델(GLB 등)을 웹에서 렌더링하는 예시입니다.

## 1. 주요 라이브러리

- **@react-three/fiber**: React에서 Three.js를 선언적으로 사용할 수 있게 해주는 핵심 라이브러리
- **@react-three/drei**: 자주 쓰는 3D 컴포넌트(조명, 환경, 컨트롤 등)를 쉽게 쓸 수 있게 해주는 보조 라이브러리

## 2. 세팅 및 기본 구조

### 설치

```bash
npm install @react-three/fiber @react-three/drei three
```

### 기본 구조 예시

```jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Loader, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/model.glb");
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 2, 2]} intensity={0.3} color="red" />
        <Environment preset="city" />
        <Model />
        <OrbitControls enablePan={false} />
      </Suspense>
      <Loader />
    </Canvas>
  );
}
```

## 3. 자주 사용하는 3D 속성/옵션

### 1) **카메라**

- `position`: 카메라 위치 (예: `[0, 0, 2]`)
- `fov`, `near`, `far`: 시야각, 렌더링 범위 등
- **OrbitControls**: 마우스 회전/줌/이동 등 인터랙션 제공
  - `enablePan`, `enableZoom`, `enableRotate`, `minDistance`, `maxDistance` 등

### 2) **조명(Light)**

- `<ambientLight intensity={0.2} color="white" />`: 전체적으로 은은한 빛
- `<directionalLight position={[x, y, z]} intensity={0.3} color="red" />`: 특정 방향에서 비추는 빛
- `<pointLight position={[x, y, z]} color="blue" />`: 점에서 퍼지는 빛
- `intensity`, `color`, `position` 등 속성 조절 가능

### 3) **환경/배경(Environment)**

- `<Environment preset="city" />`: 환경 프리셋(조명/반사/배경) 적용
- `preset`: "city", "sunset", "dawn" 등 다양한 프리셋
- `background` 속성으로 배경까지 적용 가능

### 4) **3D 모델(Model)**

- **GLB/GLTF 파일 불러오기**: `useGLTF` 훅 사용
- `<primitive object={scene} />`: 전체 씬 렌더링
- **Mesh 속성**: `position`, `rotation`, `scale` 등으로 위치/회전/크기 조절
- **재질(Material) 속성**: `color`, `metalness`, `roughness`, `opacity`, `transparent` 등
- **애니메이션**: glTF에 포함된 애니메이션은 drei의 useAnimations로 제어 가능

### 5) **로딩/상태**

- `<Loader />`: 3D 모델 등 리소스 로딩 상태를 자동으로 감지해 로딩 UI 표시
- `useProgress`로 커스텀 로딩 UI 구현 가능

### 6) **이벤트/인터랙션**

- `onClick`, `onPointerOver` 등으로 3D 오브젝트에 이벤트 핸들러 부착 가능

## 4. 참고

- **GLB 파일 사용 권장**: glTF(.gltf)보다 glb(.glb)가 파일 하나로 관리되어 훨씬 편리함
- 블렌더 등에서 모델 제작 시, 텍스처/애니메이션/머티리얼 이름을 명확히 해두면 코드에서 접근이 쉬움
- Drei 공식 문서: https://docs.pmnd.rs/drei
- Fiber 공식 문서: https://docs.pmnd.rs/react-three-fiber
