import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Box } from "lucide-react";

interface SampleSelectProps {
  value: string;
  onChange: (val: string) => void;
  samples: { key: string; label: string }[];
}

export default function SampleSelect({ value, onChange, samples }: SampleSelectProps) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <label className="text-sm text-gray-600 flex items-center gap-1">
        <Box className="w-4 h-4 text-violet-500" />
        샘플 모델을 선택하세요.
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full min-w-0 flex items-center">
          <SelectValue placeholder="샘플 모델을 선택하세요." />
        </SelectTrigger>
        <SelectContent>
          {samples.map(({ key, label }) => (
            <SelectItem key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
