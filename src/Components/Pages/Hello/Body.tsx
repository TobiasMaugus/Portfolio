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
        color: themeColors.syntaxDefault,
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
        <div style={{ marginBottom: "10px", color: themeColors.syntaxDefault }}>
          Hi all. I am
        </div>

        <div
          style={{
            fontSize: "36px",
            fontWeight: 300,
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            color: themeColors.whiteHover,
          }}
        >
          Tobias Maugus
        </div>

        <div
          style={{
            color: themeColors.syntaxTitle,
            fontSize: "20px",
            marginTop: "5px",
          }}
        >
          &gt; Fullstack developer
        </div>

        <br />

        <div style={{ color: themeColors.syntaxSubtitle }}>
          // find my profile on Github:
        </div>

        <div style={{ marginTop: "5px" }}>
          <span style={{ color: themeColors.syntaxKeyword }}>const</span>{" "}
          <span style={{ color: themeColors.syntaxVariable }}>githubLink</span>{" "}
          ={" "}
          <span style={{ color: themeColors.syntaxString }}>
            <a
              href="https://github.com/TobiasMaugus"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: themeColors.syntaxString,
                textDecoration: "none",
              }}
            >
              "https://github.com/TobiasMaugus"
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
