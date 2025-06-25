import Table from "./components/models/Table";
import RotationBox from "./components/models/RotationBox";
import Iphone from "./components/models/Iphone";
import Hand from "./components/models/Hand";
import { useState } from "react";
import { Info } from "lucide-react";
import ViewerTooltip from "./components/ViewerTooltip";

const buttons = [
  { key: "iphone", label: "iPhone" },
  { key: "table", label: "Table" },
  { key: "box", label: "Rotation Box" },
  { key: "hand", label: "Hand" },
];

function App() {
  const [selectedTab, setSelectedTab] = useState("iphone");
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0c3fc 50%, #8ec5fc 100%)",
        padding: "0",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "0.5rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#4b2996",
            letterSpacing: "-1px",
            textShadow: "0 2px 8px #e0c3fc99",
            margin: 0,
          }}
        >
          3D Viewer
        </h1>
        <Info
          size={28}
          color="#7c3aed"
          style={{ marginLeft: 12, cursor: "pointer" }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          tabIndex={0}
          aria-label="도움말"
        />
        {showTooltip && <ViewerTooltip setShowTooltip={setShowTooltip} />}
      </div>
      <div
        style={{
          width: "95vw",
          margin: "16px 0 16px 0",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {buttons.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSelectedTab(key)}
            style={{
              fontWeight: selectedTab === key ? "bold" : "normal",
              padding: "8px 12px",
              fontSize: "1rem",
              borderRadius: "12px",
              border: selectedTab === key ? "2px solid #a78bfa" : "1px solid #e0c3fc",
              background: selectedTab === key ? "#ede9fe" : "#fff",
              color: selectedTab === key ? "#7c3aed" : "#4b2996",
              boxShadow: selectedTab === key ? "0 2px 8px #e0c3fc55" : "none",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {selectedTab === "iphone" && <Iphone />}
      {selectedTab === "table" && <Table />}
      {selectedTab === "box" && <RotationBox />}
      {selectedTab === "hand" && <Hand />}
    </main>
  );
}

export default App;
