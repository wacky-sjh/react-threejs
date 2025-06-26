import { Info, RotateCw, ZoomIn } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

export default function GuidePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Info
          size={28}
          color="#7c3aed"
          className="ml-3 cursor-pointer"
          tabIndex={0}
          aria-label="도움말"
        />
      </PopoverTrigger>
      <PopoverContent sideOffset={6} align="end" className="bg-white shadow-md max-w-[420px] p-0">
        <ul className="flex flex-col w-full text-xs">
          <li className="flex items-center gap-2 p-2">
            <Info size={16} color="#7c3aed" className="min-w-[22px]" />
            <span className="text-purple-900">샘플 모델을 선택하거나 3D 모델을 업로드하세요.</span>
          </li>
          <li className="flex items-center gap-2 p-2">
            <RotateCw size={16} color="#7c3aed" className="min-w-[22px]" />
            <span className="text-purple-900">
              마우스 드래그 또는 터치로 사물을 회전시켜보세요.
            </span>
          </li>
          <li className="flex items-center gap-2 p-2">
            <ZoomIn size={16} color="#7c3aed" className="min-w-[22px]" />
            <span className="text-purple-900">마우스 휠 또는 두 손가락 터치로 확대해보세요.</span>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
