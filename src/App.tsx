import ProductViewer from "./components/ProductViewer";
import RotationBox from "./components/RotationBox";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("product");

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>3D Viewer</h1>
      <ul style={{ textAlign: "start", margin: "auto", padding: "0" }}>
        <li>회전: DESKTOP - 마우스 드래그 | MOBILE - 터치</li>
        <li>확대/축소: DESKTOP - 마우스 휠 | MOBILE - 터치</li>
      </ul>
      <div style={{ margin: "20px 0" }}>
        <button
          onClick={() => setSelectedTab("product")}
          style={{
            fontWeight: selectedTab === "product" ? "bold" : "normal",
            marginRight: "10px",
            padding: "10px 20px",
          }}
        >
          Product
        </button>
        <button
          onClick={() => setSelectedTab("box")}
          style={{
            fontWeight: selectedTab === "box" ? "bold" : "normal",
            padding: "10px 20px",
          }}
        >
          Box
        </button>
      </div>
      {selectedTab === "product" && <ProductViewer />}
      {selectedTab === "box" && <RotationBox />}
    </main>
  );
}

export default App;
