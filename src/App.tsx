import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Product 3D Viewer</h1>
      <ul style={{ textAlign: "start", margin: "auto", padding: "0" }}>
        <li>회전: DESKTOP - 마우스 드래그 | MOBILE - 터치</li>
        <li>확대/축소: DESKTOP - 마우스 휠 | MOBILE - 터치</li>
      </ul>
      <ProductViewer />
    </main>
  );
}

export default App;
