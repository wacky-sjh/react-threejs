import GuidePopover from "./GuidePopover";

export default function Header() {
  return (
    <div className="w-full flex flex-row items-center justify-between py-4 px-7">
      <h1 className="text-2xl md:text-4xl font-bold text-purple-800 tracking-tight drop-shadow-[0_2px_8px_rgba(224,195,252,0.6)] m-0">
        3D Viewer
      </h1>
      <GuidePopover />
    </div>
  );
}
