import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Tìm kiếm dịch vụ hoặc tên đăng nhập..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-card/50 backdrop-blur-sm"
      />
    </div>
  );
};