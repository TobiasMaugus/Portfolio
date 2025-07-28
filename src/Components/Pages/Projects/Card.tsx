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
  return (
    <div
      style={{
        backgroundColor: "#0b1120",
        borderRadius: "12px",
        overflow: "hidden",
        fontFamily: "'Fira Code', monospace",
        color: "#d4d4d4",
        width: "300px",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header - Título */}
      <div
        style={{
          padding: "12px 16px",
          fontSize: "14px",
          color: "#7aa2f7",
        }}
      >
        <span style={{ fontWeight: "bold", color: "#7aa2f7" }}>{title}</span>{" "}
        <span style={{ color: "#6c6c6c" }}>// _project</span>
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
            color: "#cbd5e1",
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
            backgroundColor: "#1e293b",
            color: "#f1f5f9",
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
