import { colors } from "../../../colors/colors";
import { Folder as FolderIcon, FileCode } from "lucide-react";
import { useState } from "react";
import FilterFolder from "./FilterFolder";

export default function BodyProjects() {
  const [checkedTechs, setCheckedTechs] = useState<string[]>([]);

  const handleTechChange = (label: string, isChecked: boolean) => {
    setCheckedTechs((prev) =>
      isChecked ? [...prev, label] : prev.filter((t) => t !== label)
    );
  };
  return (
    <div
      style={{
        width: "95%",
        height: "80%",
        backgroundColor: colors.primary,
        borderColor: colors.second,
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
      }}
    >
      <div
        style={{
          width: "17.25%",
          height: "100%",
          backgroundColor: colors.primary,
          borderColor: colors.second,
          borderRightWidth: "1px",
          padding: "10px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <FilterFolder
          icon={<FolderIcon size={16} />}
          label="Backend"
          iconColor="#ff6600"
          subItems={[
            {
              label: "Java",
              icon: <FileCode size={14} />,
              checked: checkedTechs.includes("Java"),
              onChange: handleTechChange,
            },
            {
              label: "Go",
              icon: <FileCode size={14} />,
              checked: checkedTechs.includes("Go"),
              onChange: handleTechChange,
            },
            {
              label: "Python",
              icon: <FileCode size={14} />,
              checked: checkedTechs.includes("Python"),
              onChange: handleTechChange,
            },
          ]}
        />
      </div>
    </div>
  );
}
