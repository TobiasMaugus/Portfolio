import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(true); // desktop toggle
  const [isModalOpen, setIsModalOpen] = useState(false); // mobile modal
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  // Atualiza isMobile dinamicamente
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFolderClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div>
      {/* Pasta */}
      <div
        onClick={handleFolderClick}
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
        {isOpen && !isMobile ? (
          <ChevronDown size={12} />
        ) : (
          <ChevronRight size={12} />
        )}
        <div style={{ width: iconSize, color: iconColor }}>{icon}</div>
        {!isMobile && <span>{label}</span>}
      </div>

      {/* Subitens no desktop */}
      {isOpen && !isMobile && (
        <div style={{ display: "flex", gap: "4px" }}>
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
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  cursor: "pointer",
                  color: themeColors.second,
                }}
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

      {/* Modal no mobile */}
      {isMobile && isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: themeColors.primary,
              padding: "16px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "320px",
              color: themeColors.second,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <strong>{label}</strong>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={18} color={themeColors.second} />
              </button>
            </div>

            {/* Subitens */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {subItems.map((item, index) => (
                <label
                  key={index}
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) =>
                      item.onChange(item.label, e.target.checked)
                    }
                  />
                  {item.icon || <div style={{ width: "14px" }} />}
                  {item.label}
                </label>
              ))}
            </div>

            {/* Botão Done */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                marginTop: "16px",
                padding: "8px 12px",
                background: themeColors.second,
                color: themeColors.primary,
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
