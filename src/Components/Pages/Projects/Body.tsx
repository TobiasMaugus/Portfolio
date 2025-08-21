import { colors, light_colors } from "../../../colors/colors";
import { Folder as FolderIcon, Coffee } from "lucide-react";
import { useState, useMemo } from "react";
import FilterFolder from "./FilterFolder";
import "./BodyStyles.css";
import Card from "./Card";
import ImgCpp from "../../../assets/CPlusPlus1.jpg";
import ImgGraph from "../../../assets/graphs.png";
import ImgAnimes from "../../../assets/animes.png";
import ImgIalg from "../../../assets/ialg.png";
import ImgLaravel from "../../../assets/laravel.png";
import ImgMobile from "../../../assets/mobile.png";
import ImgPython from "../../../assets/python.jpg";
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

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

export default function BodyProjects() {
  const [checkedTechs, setCheckedTechs] = useState<string[]>([]);
  const { theme, language } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const l = languages[language];

  // Defina os projetos com suas tecnologias
  const projects: Project[] = [
    {
      id: "1",
      image: ImgCpp,
      title: l.dataStructures,
      description: l.dataStructuresDesc,
      link: "https://github.com/TobiasMaugus/ProjetoED",
      technologies: ["C++"],
    },
    {
      id: "2",
      image: ImgGraph,
      title: l.graphs,
      description: l.graphsDesc,
      link: "https://github.com/TobiasMaugus/Grafos2",
      technologies: ["C++"],
    },
    {
      id: "3",
      image: ImgIalg,
      title: l.uniIntroduction,
      description: l.uniIntroductionDesc,
      link: "https://github.com/TobiasMaugus/ProjetoFinalIALG",
      technologies: ["Python"],
    },
    {
      id: "4",
      image: ImgMobile,
      title: l.mobileApp,
      description: l.mobileAppDesc,
      link: "https://github.com/TobiasMaugus/mobile2022.git",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: "5",
      image: ImgLaravel,
      title: l.laravel,
      description: l.laravelDesc,
      link: "https://github.com/TobiasMaugus/laravelzin.git",
      technologies: ["Php", "HTML", "CSS", "JavaScript"],
    },
    {
      id: "6",
      image: ImgAnimes,
      title: l.firstSite,
      description: l.firstSiteDesc,
      link: "https://reactweb1.vercel.app/",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: "7",
      image: ImgPython,
      title: l.problems,
      description: l.problemsDesc,
      link: "https://github.com/TobiasMaugus/lp2",
      technologies: ["Python"],
    },
  ];

  const handleTechChange = (label: string, isChecked: boolean) => {
    setCheckedTechs((prev) =>
      isChecked ? [...prev, label] : prev.filter((t) => t !== label)
    );
  };

  // Filtra os projetos baseado nas tecnologias selecionadas
  const filteredProjects = useMemo(() => {
    if (checkedTechs.length === 0) {
      return projects; // Mostra todos se nenhum filtro estiver selecionado
    }

    return projects.filter((project) =>
      checkedTechs.some((tech) => project.technologies.includes(tech))
    );
  }, [checkedTechs, projects]);

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
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignContent: "flex-start",
        }}
        className="scroll"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "40px",
              color: themeColors.cardText,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
