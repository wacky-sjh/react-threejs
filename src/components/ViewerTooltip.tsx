import { RotateCw, ZoomIn } from "lucide-react";

interface ViewerTooltipProps {
  setShowTooltip: (show: boolean) => void;
}

export default function ViewerTooltip({ setShowTooltip }: ViewerTooltipProps) {
  return (
    <ul
      style={{
        position: "absolute",
        top: "110%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        textAlign: "start",
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.97)",
        borderRadius: "16px",
        boxShadow: "0 2px 16px #e0c3fc33",
        maxWidth: "420px",
        width: "max-content",
        fontSize: "0.8rem",
        fontWeight: 500,
        gap: "0",
        border: "1px solid #e0c3fc",
        pointerEvents: "auto",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px" }}>
        <RotateCw size={16} color="#7c3aed" style={{ minWidth: 22 }} />
        <span style={{ color: "#4b2996" }}>마우스 드래그 또는 터치로 사물을 회전시켜보세요.</span>
      </li>
      <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px" }}>
        <ZoomIn size={16} color="#7c3aed" style={{ minWidth: 22 }} />
        <span style={{ color: "#4b2996" }}>마우스 휠 또는 두 손가락 터치로 확대해보세요.</span>
      </li>
    </ul>
  );
}
