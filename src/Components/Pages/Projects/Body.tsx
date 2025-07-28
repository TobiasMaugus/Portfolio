import { colors } from "../../../colors/colors";
import { Folder as FolderIcon, FileCode } from "lucide-react";
import { useState } from "react";
import FilterFolder from "./FilterFolder";
import "./BodyStyles.css";
import Card from "./Card";
import Img1 from "../../../assets/CPlusPlus1.jpg";

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
        flexDirection: "row",
        display: "flex",
        justifyContent: "flex-start",
      }}
      className="body-projects"
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
          icon={<FolderIcon size={18} />}
          label="Backend"
          iconColor="#14e0beff"
          subItems={[
            {
              label: "Java",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("Java"),
              onChange: handleTechChange,
            },
            {
              label: "Go",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("Go"),
              onChange: handleTechChange,
            },
            {
              label: "Python",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("Python"),
              onChange: handleTechChange,
            },
            {
              label: "Node.js",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("Node.js"),
              onChange: handleTechChange,
            },
          ]}
        />
        <FilterFolder
          icon={<FolderIcon size={18} />}
          label="Frontend"
          iconColor="#d7fc05ff"
          subItems={[
            {
              label: "HTML",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("HTML"),
              onChange: handleTechChange,
            },
            {
              label: "CSS",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("CSS"),
              onChange: handleTechChange,
            },
            {
              label: "JavaScript",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("JavaScript"),
              onChange: handleTechChange,
            },
            {
              label: "TypeScript",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("TypeScript"),
              onChange: handleTechChange,
            },
          ]}
        />
        <FilterFolder
          icon={<FolderIcon size={18} />}
          label="Others"
          iconColor="#e0147aff"
          subItems={[
            {
              label: "C++",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("C++"),
              onChange: handleTechChange,
            },
            {
              label: "Haskell",
              icon: <FileCode size={18} />,
              checked: checkedTechs.includes("Haskell"),
              onChange: handleTechChange,
            },
          ]}
        />
      </div>
      <div
        style={{
          flex: 1, // ocupa o restante do espaço
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignContent: "flex-start",
        }}
        className="scroll"
      >
        <Card
          image={Img1}
          title="Project 1"
          description="Descrição do projeto."
          link=""
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
        <Card
          image=""
          title="Project 1"
          description="Descrição do projeto."
          link="https://github.com/example/project"
        />
      </div>
    </div>
  );
}
