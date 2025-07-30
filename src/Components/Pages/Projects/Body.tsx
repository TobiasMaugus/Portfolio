import { colors, light_colors } from "../../../colors/colors";
import { Folder as FolderIcon, FileCode } from "lucide-react";
import { useState } from "react";
import FilterFolder from "./FilterFolder";
import "./BodyStyles.css";
import Card from "./Card";
import ImgCpp from "../../../assets/CPlusPlus1.jpg";
import ImgGraph from "../../../assets/graphs.png";
import ImgAnimes from "../../../assets/animes.png";
import ImgIalg from "../../../assets/ialg.png";
import ImgLaravel from "../../../assets/laravel.png";
import Imgmobile from "../../../assets/mobile.png";
import ImgPyhton from "../../../assets/python.jpg";

import { useAppContext } from "../../../contexts/AppContext";

export default function BodyProjects() {
  const [checkedTechs, setCheckedTechs] = useState<string[]>([]);
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

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
        backgroundColor: themeColors.primary,
        borderColor: themeColors.second,
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
          backgroundColor: themeColors.primary,
          borderColor: themeColors.second,
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
          image={ImgCpp}
          title="Data Structures"
          description="Project for the discipline of Data Structures and Algorithms made in C++. Uses Sequence Sets made from scratch."
          link=""
        />
        <Card
          image={ImgGraph}
          title="Graphs"
          description="Graph Theory project made in Python for academic purposes. 
          It's a heuristic for a variation of MCARP."
          link="https://github.com/TobiasMaugus/Grafos2"
        />
        <Card
          image={ImgIalg}
          title="Uni Introduction"
          description="It's a very simple project made in C++ for the discipline of Algorithms Introduction."
          link="https://github.com/TobiasMaugus/ProjetoFinalIALG"
        />
        <Card
          image={Imgmobile}
          title="Mobile App"
          description="An MVP of Mobile App made in 2022 for motorcicle deliverys."
          link="https://github.com/TobiasMaugus/mobile2022.git"
        />
        <Card
          image={ImgLaravel}
          title="Laravel"
          description="One of the first CRUD's I've made(2022). It uses PHP with Laravel."
          link="https://github.com/TobiasMaugus/laravelzin.git"
        />
        <Card
          image={ImgAnimes}
          title="First Site"
          description="First Site I've made myself and did the deploy(2021). Unfortunately the API was hosted in a site that no longer exists."
          link="https://reactweb1.vercel.app/"
        />
        <Card
          image={ImgPyhton}
          title="Problems"
          description="Series of Python Problems made in 2021 for academic purposes. It has some DNA problems, math model problems and ORM to model some DB's."
          link="https://github.com/example/project"
        />
      </div>
    </div>
  );
}
