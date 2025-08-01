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
    >
      {/* Formulário */}
      <div
        style={{
          flex: 1,
          padding: "17px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
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
                  color: "#ff4d4d",
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
                  email && !isEmailValid ? "#ff4d4d" : themeColors.second
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
                  color: "#ff4d4d",
                  fontSize: "16px",
                  pointerEvents: "none",
                }}
              >
                <IoAlertCircleOutline color="#ff4d4d" size={16} />
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
            backgroundColor: isEmailValid ? themeColors.second : "#666",
            color: themeColors.primary,
            border: "none",
            borderRadius: "4px",
            cursor: isEmailValid ? "pointer" : "not-allowed",
            fontWeight: 400,
            fontFamily: "'Fira Code', monospace",
            opacity: isEmailValid ? 1 : 0.6,
            alignSelf: "flex-start",
          }}
        >
          submit-message
        </button>
      </div>

      {/* Código simulado */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#0d1117",
          borderLeft: `1px solid ${themeColors.second}`,
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          maxHeight: "100%", // <- limite vertical
          overflowY: "auto", // <- scroll quando necessário
          paddingRight: "16px", // <- espaço para o scroll
          boxSizing: "border-box",
        }}
        className="scroll"
      >
        <code>
          <span style={{ color: "#c792ea" }}>const</span> button =
          document.querySelector(
          <span style={{ color: "#ecc48d" }}>"#sendBtn"</span>);
          {"\n\n"}
          <span style={{ color: "#c792ea" }}>const</span> message = {"{"}
          {"\n  "}
          <span style={{ color: "#82aaff" }}>to</span>:{" "}
          <span style={{ color: "#ecc48d" }}>"tobiasmaugus705@gmail.com"</span>,
          {"\n  "}
          <span style={{ color: "#82aaff" }}>name</span>:{" "}
          <span style={{ color: "#ecc48d" }}>"{name || ""}"</span>,{"\n  "}
          <span style={{ color: "#82aaff" }}>email</span>:{" "}
          <span style={{ color: "#ecc48d" }}>"{email || ""}"</span>,{"\n  "}
          <span style={{ color: "#82aaff" }}>message</span>:{" "}
          <span style={{ color: "#ecc48d" }}>"{message || ""}"</span>,{"\n  "}
          <span style={{ color: "#82aaff" }}>date</span>:{" "}
          <span style={{ color: "#ecc48d" }}>
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
