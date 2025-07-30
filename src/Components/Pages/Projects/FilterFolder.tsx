import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { colors, light_colors } from "../../../colors/colors";
import "./FilterFolder.css";
import { useAppContext } from "../../../contexts/AppContext";

interface FilterSubItem {
  label: string;
  icon?: React.ReactNode;
  checked: boolean;
  onChange: (label: string, checked: boolean) => void;
}

interface FilterFolderProps {
  icon: React.ReactNode;
  label: string;
  iconColor: string;
  iconSize?: number;
  subItems: FilterSubItem[];
}

export default function FilterFolder({
  icon,
  label,
  iconColor,
  iconSize = 16,
  subItems,
}: FilterFolderProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  return (
    <div>
      {/* Pasta */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: "8px",
          color: themeColors.second,
          fontSize: "14px",
          padding: "4px 0",
        }}
      >
        {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <div style={{ width: iconSize, color: iconColor }}>{icon}</div>
        <span>{label}</span>
      </div>

      {/* Subitens com checkbox */}
      {isOpen && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "10px",
              borderLeft: `1px solid ${themeColors.second}`,
              marginLeft: "9px",
              marginRight: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {subItems.map((item, index) => (
              <label
                key={index}
                className={`checkbox-wrapper ${item.checked ? "checked" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => item.onChange(item.label, e.target.checked)}
                  className="checkbox-hidden"
                />
                <span className="checkbox-custom" />
                {item.icon || <div style={{ width: "14px" }} />}
                {item.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
