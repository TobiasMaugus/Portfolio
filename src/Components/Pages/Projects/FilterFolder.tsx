import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { colors } from "../../../colors/colors";
import "./FilterFolder.css";

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
          color: colors.second,
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
              borderLeft: `1px solid ${colors.second}`,
              marginLeft: "9px",
              marginRight: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {subItems.map((item, index) => (
              <label
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 6px",
                  borderRadius: "4px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontStyle: "thin",
                  color: colors.second,
                  fontSize: "14px",
                  backgroundColor: item.checked ? "#2c2c2c" : "transparent",
                  transition: "background-color 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => item.onChange(item.label, e.target.checked)}
                  className="checkbox-custom"
                />
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
