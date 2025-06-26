import Table from "./components/models/Table";
import RotationBox from "./components/models/RotationBox";
import Iphone from "./components/models/Iphone";
import Hand from "./components/models/Hand";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import SampleSelect from "./components/SampleSelect";
import ModelFileInput from "./components/ModelFileInput";

const samples = [
  { key: "iphone", label: "iPhone" },
  { key: "table", label: "Table" },
  { key: "box", label: "Rotation Box" },
  { key: "hand", label: "Hand" },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState("iphone");
  const [uploadedGlb, setUploadedGlb] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSampleChange = (val: string) => {
    setSelectedTab(val);
    if (val !== "preview") {
      setUploadedGlb(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedGlb(URL.createObjectURL(file));
      setSelectedTab("preview");
    }
  };

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-50 via-purple-200 to-blue-200 p-0">
      <Header />
      <div className="flex flex-col md:flex-row md:gap-10 gap-2 items-stretch w-full max-w-[84vw] my-4">
        <SampleSelect
          value={selectedTab === "preview" ? "" : selectedTab}
          onChange={handleSampleChange}
          samples={samples}
        />
        <ModelFileInput onChange={handleFileChange} ref={fileInputRef} />
      </div>
      {uploadedGlb ? (
        <Preview glbUrl={uploadedGlb} />
      ) : (
        <>
          {selectedTab === "iphone" && <Iphone />}
          {selectedTab === "table" && <Table />}
          {selectedTab === "box" && <RotationBox />}
          {selectedTab === "hand" && <Hand />}
        </>
      )}
    </main>
  );
}
