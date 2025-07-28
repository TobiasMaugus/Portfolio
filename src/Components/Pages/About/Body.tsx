import { colors } from "../../../colors/colors";
import { Folder as FolderIcon } from "lucide-react";
import Folder from "./Folder";
import { useState } from "react";
import "./BodyStyles.css";
import { SiCplusplus, SiPhp, SiMarkdown } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { VscJson } from "react-icons/vsc";

export default function BodyAbout() {
  const [selectedFile, setSelectedFile] = useState<string>("bio.md");
  return (
    <div
      style={{
        width: "95%",
        height: "80%",
        backgroundColor: colors.primary,
        borderColor: colors.second,
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        display: "flex",
        color: colors.second,
      }}
    >
      <div
        style={{
          width: "20.4%",
          height: "100%",
          backgroundColor: colors.primary,
          borderColor: colors.second,
          borderRightWidth: "1px",
          padding: "10px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Folder
          icon={<FolderIcon size={18} />}
          label="about-me"
          iconColor="#F5A623"
          selected={selectedFile}
          subItems={[
            {
              label: "bio.md",
              onClick: () => setSelectedFile("bio.md"),
              icon: <SiMarkdown size={18} />,
            },
            {
              label: "hobbies.php",
              onClick: () => setSelectedFile("hobbies.php"),
              icon: <SiPhp size={18} />,
            },
          ]}
        />

        <Folder
          icon={<FolderIcon size={18} />}
          label="skills"
          iconColor="#00D1B2"
          selected={selectedFile}
          subItems={[
            {
              label: "technologies.json",
              onClick: () => setSelectedFile("technologies.json"),
              icon: <VscJson size={18} />,
            },
            {
              label: "languages.cpp",
              onClick: () => setSelectedFile("languages.cpp"),
              icon: <SiCplusplus size={18} />,
            },
          ]}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.primary,
        }}
      >
        {selectedFile === "bio.md" && (
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Aba do VS Code */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                height: "32px",
                backgroundColor: "#1e1e1e",
                borderRight: "1px solid #333",
                borderBottom: "1px solid #333",
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: "#d4d4d4",
                gap: "8px", // espaçamento entre ícone e texto
              }}
            >
              <SiMarkdown size={18} />
              <span>bio.md</span>

              <span
                onClick={() => setSelectedFile("no-file")}
                style={{
                  marginLeft: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4d4d4",
                  cursor: "pointer",
                }}
              >
                <IoCloseSharp size={14} />
              </span>
            </div>

            {/* Conteúdo do arquivo */}
            <div
              style={{
                padding: "20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: "#1e1e1e",
                color: "#d4d4d4",
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <div>
                <span style={{ color: "#569cd6" }}>
                  ## Hello, I'm Tobias Maugus!
                </span>
                {"\n\n"}
                <p>
                  Developer with a technical degree in Information Technology
                  from the{" "}
                  <span style={{ color: "#dcdcaa" }}>
                    Federal Center for Technological Education of Minas Gerais
                    (CEFET-MG)
                  </span>{" "}
                  and practical experience in programming with various
                  languages, including{" "}
                  <span style={{ color: "#ce9178" }}>Python</span>,{" "}
                  <span style={{ color: "#ce9178" }}>C++</span>,{" "}
                  <span style={{ color: "#ce9178" }}>
                    JavaScript frameworks
                  </span>{" "}
                  (<span style={{ color: "#4ec9b0" }}>NodeJS</span>,{" "}
                  <span style={{ color: "#4ec9b0" }}>React</span>,{" "}
                  <span style={{ color: "#4ec9b0" }}>React Native</span>),{" "}
                  <span style={{ color: "#ce9178" }}>TypeScript</span>{" "}
                  (Express), <span style={{ color: "#ce9178" }}>HTML</span>,{" "}
                  <span style={{ color: "#ce9178" }}>CSS</span> and{" "}
                  <span style={{ color: "#ce9178" }}>SQL</span>.
                </p>
                <p>
                  During my internship, I taught basic computer courses,
                  enhancing my communication and teaching skills.
                </p>
                <p>
                  I am currently pursuing a degree in{" "}
                  <span style={{ color: "#dcdcaa" }}>Computer Science</span> at
                  the{" "}
                  <span style={{ color: "#dcdcaa" }}>
                    Federal University of Lavras (UFLA)
                  </span>{" "}
                  and seeking new opportunities to apply and expand my knowledge
                  in software development.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedFile === "technologies.json" && (
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Aba do VS Code */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                height: "32px",
                backgroundColor: "#1e1e1e",
                borderRight: "1px solid #333",
                borderBottom: "1px solid #333",
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: "#d4d4d4",
                gap: "8px",
              }}
            >
              <VscJson size={18} />
              <span>technologies.json</span>

              <span
                onClick={() => setSelectedFile("no-file")}
                style={{
                  marginLeft: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4d4d4",
                  cursor: "pointer",
                }}
              >
                <IoCloseSharp size={14} />
              </span>
            </div>

            {/* Conteúdo do arquivo JSON */}
            <div
              className="json-scroll"
              style={{
                padding: "20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: "#1e1e1e",
                color: "#d4d4d4",
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {"{\n"}
              &nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>"languages"</span>:
              [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"Python"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"C++"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"JavaScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"TypeScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"HTML"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"CSS"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"SQL"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>"frameworks"</span>
              : [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"Node.js"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"React"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"React Native"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"Express"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>"database"</span>:
              [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"PostgreSQL"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"MySQL"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"SQLite"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span style={{ color: "#9cdcfe" }}>"tools"</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"Git"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>"VS Code"</span>
              <br />
              &nbsp;&nbsp;]
              <br />
              {"}"}
            </div>
          </div>
        )}

        {selectedFile === "languages.cpp" && (
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Aba do VS Code */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                height: "32px",
                backgroundColor: "#1e1e1e",
                borderRight: "1px solid #333",
                borderBottom: "1px solid #333",
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: "#d4d4d4",
                gap: "8px",
              }}
            >
              <SiCplusplus size={18} />
              <span>languages.cpp</span>
              <span
                onClick={() => setSelectedFile("no-file")}
                style={{
                  marginLeft: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4d4d4",
                  cursor: "pointer",
                }}
              >
                <IoCloseSharp size={14} />
              </span>
            </div>

            {/* Conteúdo do arquivo C++ */}
            <div
              style={{
                padding: "20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: "#1e1e1e",
                color: "#d4d4d4",
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: "#6a9955" }}>// Language Proficiency</span>
              <br />
              <span style={{ color: "#569cd6" }}>#include</span>{" "}
              <span style={{ color: "#ce9178" }}>&lt;iostream&gt;</span>
              <br />
              <span style={{ color: "#569cd6" }}>using</span>{" "}
              <span style={{ color: "#9cdcfe" }}>namespace</span> std;
              <br />
              <br />
              <span style={{ color: "#569cd6" }}>int</span>{" "}
              <span style={{ color: "#dcdcaa" }}>main</span>() &#123;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: "#ce9178" }}>
                "Native: Portuguese"
              </span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: "#ce9178" }}>"Fluent: English"</span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: "#ce9178" }}>
                "Intermediate: Spanish"
              </span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;<span style={{ color: "#569cd6" }}>return</span> 0;
              <br />
              &#125;
            </div>
          </div>
        )}
        {selectedFile === "hobbies.php" && (
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Aba do VS Code */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                height: "32px",
                backgroundColor: "#1e1e1e",
                borderRight: "1px solid #333",
                borderBottom: "1px solid #333",
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: "#d4d4d4",
                gap: "8px",
              }}
            >
              <SiPhp size={18} />
              <span>hobbies.php</span>

              {/* Botão de fechar */}
              <span
                onClick={() => setSelectedFile("no-file")}
                style={{
                  marginLeft: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4d4d4",
                  cursor: "pointer",
                }}
              >
                <IoCloseSharp size={14} />
              </span>
            </div>

            {/* Conteúdo do arquivo PHP */}
            <div
              style={{
                padding: "20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: "#1e1e1e",
                color: "#d4d4d4",
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: "#569cd6" }}>&lt;?php</span>
              <br />
              <span style={{ color: "#569cd6" }}>class</span>{" "}
              <span style={{ color: "#4ec9b0" }}>Hobbies</span> &#123;
              <br />
              &nbsp;&nbsp;<span style={{ color: "#569cd6" }}>public</span>{" "}
              <span style={{ color: "#569cd6" }}>function</span>{" "}
              <span style={{ color: "#dcdcaa" }}>list</span>() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#569cd6" }}>return</span> [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>'Math'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>'Gaming'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>'Watching Movies'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>'Listening to Music'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#ce9178" }}>
                'Coding Personal Projects'
              </span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;];
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <span style={{ color: "#569cd6" }}>$myHobbies</span> ={" "}
              <span style={{ color: "#569cd6" }}>new</span> Hobbies();
              <br />
              <span style={{ color: "#569cd6" }}>print_r</span>
              ($myHobbies-&gt;list());
            </div>
          </div>
        )}
        {selectedFile === "no-file" && (
          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Fira Code', 'Courier New', monospace",
              backgroundColor: "#1e1e1e",
              overflow: "hidden",
            }}
            className="body-no-file"
          >
            {/* Marca d'água */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0.05, // bem translúcido
                fontSize: "200px",
                zIndex: 0,
                color: "#ffffff",
              }}
            >
              <FolderIcon size={200} />
            </div>

            {/* Texto principal */}
            <span
              style={{
                fontSize: "18px",
                color: "#d4d4d4",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              No file selected. Select a file from the left sidebar.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
