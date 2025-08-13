import { useState } from "react";
import { ChevronRight, ChevronDown, FileText } from "lucide-react";
import { colors, light_colors } from "../../../colors/colors";
import { useAppContext } from "../../../contexts/AppContext";

interface SubItem {
  onClick?: () => void;
  icon?: React.ReactNode;
  label: string;
}

interface FolderProps {
  icon: React.ReactNode;
  label: string;
  iconColor: string;
  iconSize?: number;
  subItems: SubItem[];
  selected?: string | null;
}

export default function Folder({
  icon,
  label,
  iconSize = 16,
  iconColor = colors.second,
  subItems = [],
  selected = "",
}: FolderProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  return (
    <div>
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

      {isOpen && subItems.length > 0 && (
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
            {subItems.map((item, index) => {
              const isSelected = selected === item.label;
              return (
                <div
                  key={index}
                  onClick={item.onClick}
                  className="cursor-pointer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 6px",
                    borderRadius: "4px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontStyle: "thin",
                    color: themeColors.second,
                    fontSize: "14px",
                    backgroundColor: isSelected
                      ? themeColors.folderHover
                      : "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected)
                      e.currentTarget.style.backgroundColor =
                        themeColors.scrollBg;
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item.icon || (
                    <FileText size={14} color={themeColors.second} />
                  )}
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
