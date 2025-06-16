import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product 3D Viewer</h1>
      <div style={{ textAlign: "center" }}>
        <p>마우스 드래그 / 터치로 회전</p>
      </div>
      <ProductViewer />
    </>
  );
}

export default App;
