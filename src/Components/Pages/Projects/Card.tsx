import { useAppContext } from "../../../contexts/AppContext";
import { colors, light_colors } from "../../../colors/colors";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({
  image,
  title,
  description,
  link,
}: ProjectCardProps) {
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  return (
    <div
      style={{
        backgroundColor: themeColors.cardBackground,
        borderRadius: "12px",
        overflow: "hidden",
        fontFamily: "'Fira Code', monospace",
        color: themeColors.cardText,
        width: "300px",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header - Título */}
      <div
        style={{
          padding: "12px 16px",
          fontSize: "14px",
          color: themeColors.cardTitle,
        }}
      >
        <span style={{ fontWeight: "bold", color: themeColors.cardTitle }}>
          {title}
        </span>{" "}
        <span style={{ color: themeColors.cardSubTitle }}>// _project</span>
      </div>

      {/* Imagem */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />

      {/* Descrição */}
      <div style={{ padding: "16px" }}>
        <p
          style={{
            fontSize: "14px",
            color: themeColors.cardText,
            marginBottom: "16px",
          }}
        >
          {description}
        </p>

        {/* Botão */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: themeColors.cardButtonBg,
            color: themeColors.cardButtonText,
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          view-project
        </a>
      </div>
    </div>
  );
}
