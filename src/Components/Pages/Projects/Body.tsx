import { colors, light_colors } from "../../../colors/colors";
import { Folder as FolderIcon, Coffee } from "lucide-react";
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
import { DiPython } from "react-icons/di";
import {
  SiGo,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiHaskell,
  SiPhp,
} from "react-icons/si";

import { useAppContext } from "../../../contexts/AppContext";
import { languages } from "../../../languages/languages";

export default function BodyProjects() {
  const [checkedTechs, setCheckedTechs] = useState<string[]>([]);
  const { theme, language } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const l = languages[language];

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
          label={l.backend}
          iconColor={themeColors.folder1}
          subItems={[
            {
              label: "Java",
              icon: <Coffee size={18} />,
              checked: checkedTechs.includes("Java"),
              onChange: handleTechChange,
            },
            {
              label: "Go",
              icon: <SiGo size={18} />,
              checked: checkedTechs.includes("Go"),
              onChange: handleTechChange,
            },
            {
              label: "Python",
              icon: <DiPython size={18} />,
              checked: checkedTechs.includes("Python"),
              onChange: handleTechChange,
            },
            {
              label: "Node.js",
              icon: <SiNodedotjs size={18} />,
              checked: checkedTechs.includes("Node.js"),
              onChange: handleTechChange,
            },
          ]}
        />
        <FilterFolder
          icon={<FolderIcon size={18} />}
          label={l.frontend}
          iconColor={themeColors.folder2}
          subItems={[
            {
              label: "HTML",
              icon: <SiHtml5 size={18} />,
              checked: checkedTechs.includes("HTML"),
              onChange: handleTechChange,
            },
            {
              label: "CSS",
              icon: <SiCss3 size={18} />,
              checked: checkedTechs.includes("CSS"),
              onChange: handleTechChange,
            },
            {
              label: "JavaScript",
              icon: <SiJavascript size={18} />,
              checked: checkedTechs.includes("JavaScript"),
              onChange: handleTechChange,
            },
            {
              label: "Php",
              icon: <SiPhp size={18} />,
              checked: checkedTechs.includes("Php"),
              onChange: handleTechChange,
            },
          ]}
        />
        <FilterFolder
          icon={<FolderIcon size={18} />}
          label={l.others}
          iconColor={themeColors.folder3}
          subItems={[
            {
              label: "C++",
              icon: <SiCplusplus size={18} />,
              checked: checkedTechs.includes("C++"),
              onChange: handleTechChange,
            },
            {
              label: "Haskell",
              icon: <SiHaskell size={18} />,
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
          title={l.dataStructures}
          description={l.dataStructuresDesc}
          link="https://github.com/TobiasMaugus/ProjetoED"
        />
        <Card
          image={ImgGraph}
          title={l.graphs}
          description={l.graphsDesc}
          link="https://github.com/TobiasMaugus/Grafos2"
        />
        <Card
          image={ImgIalg}
          title={l.uniIntroduction}
          description={l.uniIntroductionDesc}
          link="https://github.com/TobiasMaugus/ProjetoFinalIALG"
        />
        <Card
          image={Imgmobile}
          title={l.mobileApp}
          description={l.mobileAppDesc}
          link="https://github.com/TobiasMaugus/mobile2022.git"
        />
        <Card
          image={ImgLaravel}
          title={l.laravel}
          description={l.laravelDesc}
          link="https://github.com/TobiasMaugus/laravelzin.git"
        />
        <Card
          image={ImgAnimes}
          title={l.firstSite}
          description={l.firstSiteDesc}
          link="https://reactweb1.vercel.app/"
        />
        <Card
          image={ImgPyhton}
          title={l.problems}
          description={l.problemsDesc}
          link="https://github.com/TobiasMaugus/lp2"
        />
      </div>
    </div>
  );
}
