import Table from "./components/models/Table";
import RotationBox from "./components/models/RotationBox";
import Iphone from "./components/models/Iphone";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("iphone");

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
      <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setSelectedTab("iphone")}
          style={{
            fontWeight: selectedTab === "iphone" ? "bold" : "normal",
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          iPhone
        </button>
        <button
          onClick={() => setSelectedTab("table")}
          style={{
            fontWeight: selectedTab === "table" ? "bold" : "normal",
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          Table
        </button>
        <button
          onClick={() => setSelectedTab("box")}
          style={{
            fontWeight: selectedTab === "box" ? "bold" : "normal",
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          Rotation Box
        </button>
      </div>
      {selectedTab === "iphone" && <Iphone />}
      {selectedTab === "table" && <Table />}
      {selectedTab === "box" && <RotationBox />}
    </main>
  );
}

export default App;
