import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, FileText, X } from "lucide-react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  // Detecta mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFolderClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (item: SubItem) => {
    if (item.onClick) item.onClick();
    setIsModalOpen(false);
  };

  return (
    <>
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
        {/* Mantém setinha mesmo no mobile */}
        {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <div style={{ width: iconSize, color: iconColor }}>{icon}</div>
        {!isMobile && <span>{label}</span>}
      </div>

      {/* Subitens desktop */}
      {!isMobile && isOpen && subItems.length > 0 && (
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

      {/* Modal mobile */}
      {isMobile && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // 50% opacidade
        >
          <div
            style={{
              backgroundColor: themeColors.primary,
            }}
            className="rounded-lg w-80 p-4 relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{ cursor: "pointer" }}
              className="absolute top-2 right-2"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold mb-4">{label}</h2>
            <div className="flex flex-col gap-2">
              {subItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor:
                      selected === item.label
                        ? themeColors.folderHover
                        : "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `rgba(${parseInt(
                      themeColors.second.slice(1, 3),
                      16
                    )}, ${parseInt(
                      themeColors.second.slice(3, 5),
                      16
                    )}, ${parseInt(themeColors.second.slice(5, 7), 16)}, 0.5)`; // hover com 50% opacidade
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      selected === item.label
                        ? themeColors.folderHover
                        : "transparent";
                  }}
                >
                  {item.icon || (
                    <FileText size={14} color={themeColors.second} />
                  )}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
