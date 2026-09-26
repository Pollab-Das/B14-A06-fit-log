
"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "Duration" | "Calories" | "Rating";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-[#9CA3AF] md:text-sm">Sort By</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="cursor-pointer appearance-none rounded-lg border border-[#222630] bg-[#15171D] py-2 pl-3 pr-9 text-xs font-semibold text-white transition-colors hover:border-[#C2F800]/40 focus:outline-none focus:border-[#C2F800]/60 md:text-sm"
        >
          <option value="Duration">Duration</option>
          <option value="Calories">Calories</option>
          <option value="Rating">Rating</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#9CA3AF]" />
      </div>
    </div>
  );
};

export default SortDropdown;