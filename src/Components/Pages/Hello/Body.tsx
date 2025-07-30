import { colors, light_colors } from "../../../colors/colors";
import "./BodyStyles.css";
import { useAppContext } from "../../../contexts/AppContext";

export default function BodyHello() {
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  return (
    <div
      style={{
        width: "95%",
        height: "80%",
        backgroundColor: themeColors.primary,
        borderColor: themeColors.second,
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Fira Code', 'Courier New', monospace",
        color: "#d4d4d4",
        padding: "20px",
      }}
      className="body-hello"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          whiteSpace: "pre-line",
          maxWidth: "600px", // controla o quanto o bloco vai para o centro
        }}
      >
        <div style={{ marginBottom: "10px", color: "#d4d4d4" }}>
          Hi all. I am
        </div>

        <div
          style={{
            fontSize: "36px",
            fontWeight: 300,
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            color: "#ffffff",
          }}
        >
          Tobias Maugus
        </div>

        <div style={{ color: "#7aa2f7", fontSize: "20px", marginTop: "5px" }}>
          &gt; Fullstack developer
        </div>

        <br />

        <div style={{ color: "#6c6c6c" }}>// find my profile on Github:</div>

        <div style={{ marginTop: "5px" }}>
          <span style={{ color: "#569cd6" }}>const</span>{" "}
          <span style={{ color: "#4ec9b0" }}>githubLink</span> ={" "}
          <span style={{ color: "#ce9178" }}>
            <a
              href="https://github.com/TobiasMaugus"
              target="_blank"
              rel="noopener noreferrer"
            >
              “https://github.com/TobiasMaugus”
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
