import { useState } from "react";
import { colors, light_colors } from "../../../colors/colors";
import { useAppContext } from "../../../contexts/AppContext";
import { IoAlertCircleOutline } from "react-icons/io5";
import "./BodyStyles.css";

export default function BodyContact() {
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = email.includes("@") && email.includes(".");

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
        display: "flex",
        color: themeColors.second,
        fontFamily: "'Fira Code', monospace",
        fontWeight: 200,
      }}
      className="form"
    >
      {/* Formulário */}
      <div
        style={{
          flex: 1,
          padding: "17px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <label>
          <span style={{ marginBottom: "4px", display: "block" }}>_name:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "transparent",
              border: `1px solid ${themeColors.second}`,
              color: themeColors.second,
              borderRadius: "4px",
              outline: "none",
            }}
            type="text"
          />
        </label>

        <label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span>_email:</span>
            {email && !isEmailValid && (
              <span
                style={{
                  color: themeColors.error,
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Wrong email address
              </span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                paddingRight: "32px", // espaço pro ícone
                backgroundColor: "transparent",
                border: `1px solid ${
                  email && !isEmailValid
                    ? themeColors.error
                    : themeColors.second
                }`,
                color: themeColors.second,
                borderRadius: "4px",
                outline: "none",
              }}
              type="email"
            />

            {/* Ícone de erro */}
            {email && !isEmailValid && (
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: themeColors.error,
                  fontSize: "16px",
                  pointerEvents: "none",
                }}
              >
                <IoAlertCircleOutline color={themeColors.error} size={16} />
              </span>
            )}
          </div>
        </label>

        <label>
          <span style={{ marginBottom: "4px", display: "block" }}>
            _message:
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="your message here ..."
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "transparent",
              border: `1px solid ${themeColors.second}`,
              color: themeColors.second,
              borderRadius: "4px",
              resize: "none",
              height: "100px",
              outline: "none",
            }}
            className="scroll"
          />
        </label>

        <button
          style={{
            marginTop: "10px",
            padding: "6px 14px",
            backgroundColor: isEmailValid
              ? themeColors.second
              : hexToRgba(themeColors.second, 0.7),
            color: themeColors.primary,
            border: "none",
            borderRadius: "4px",
            cursor: isEmailValid ? "pointer" : "not-allowed",
            fontWeight: 400,
            fontFamily: "'Fira Code', monospace",
            opacity: isEmailValid ? 1 : 0.6,
            alignSelf: window.innerWidth <= 768 ? "center" : "flex-start",
          }}
          className="button-sub"
        >
          submit-message
        </button>
      </div>

      {/* Código simulado */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: themeColors.syntaxBackgroundAlt,
          borderLeft: `1px solid ${themeColors.second}`,
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          maxHeight: "100%", // <- limite vertical
          overflowY: "auto", // <- scroll quando necessário
          paddingRight: "16px", // <- espaço para o scroll
          boxSizing: "border-box",
        }}
        className="scroll code"
      >
        <code>
          <span style={{ color: themeColors.syntaxKeywordAlt }}>const</span>{" "}
          button = document.querySelector(
          <span style={{ color: themeColors.syntaxStringAlt }}>"#sendBtn"</span>
          );
          {"\n\n"}
          <span style={{ color: themeColors.syntaxKeywordAlt }}>
            const
          </span>{" "}
          message = {"{"}
          {"\n  "}
          <span style={{ color: themeColors.syntaxVariableAlt }}>to</span>:{" "}
          <span style={{ color: themeColors.syntaxStringAlt }}>
            "tobiasmaugus705@gmail.com"
          </span>
          ,{"\n  "}
          <span style={{ color: themeColors.syntaxVariableAlt }}>
            name
          </span>:{" "}
          <span style={{ color: themeColors.syntaxStringAlt }}>
            "{name || ""}"
          </span>
          ,{"\n  "}
          <span style={{ color: themeColors.syntaxVariableAlt }}>
            email
          </span>:{" "}
          <span style={{ color: themeColors.syntaxStringAlt }}>
            "{email || ""}"
          </span>
          ,{"\n  "}
          <span style={{ color: themeColors.syntaxVariableAlt }}>
            message
          </span>:{" "}
          <span style={{ color: themeColors.syntaxStringAlt }}>
            "{message || ""}"
          </span>
          ,{"\n  "}
          <span style={{ color: themeColors.syntaxVariableAlt }}>
            date
          </span>:{" "}
          <span style={{ color: themeColors.syntaxStringAlt }}>
            "{new Date().toDateString()}"
          </span>
          {"\n"}
          {"}"}
          {"\n\n"}
          button.addEventListener('click', () =&gt; {"{"}
          {"\n  "}
          form.send(message);
          {"\n"}
          {"});"}
        </code>
      </div>
    </div>
  );
}
