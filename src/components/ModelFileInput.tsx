import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { forwardRef } from "react";
import type { ForwardedRef } from "react";

interface ModelFileInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModelFileInput = forwardRef(function ModelFileInput(
  { onChange }: ModelFileInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <label htmlFor="file-upload" className="text-sm text-gray-600 flex items-center gap-1">
        <Upload className="w-4 h-4 text-violet-500" />
        3D 모델 업로드 (glb)
      </label>
      <div className="relative">
        <Input
          id="file-upload"
          type="file"
          accept=".glb"
          onChange={onChange}
          className="w-full min-w-0 pr-10"
          ref={ref}
        />
        <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none" />
      </div>
    </div>
  );
});

export default ModelFileInput;
