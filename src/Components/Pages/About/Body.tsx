import { colors, light_colors } from "../../../colors/colors";
import { Folder as FolderIcon } from "lucide-react";
import Folder from "./Folder";
import { useState } from "react";
import "./BodyStyles.css";
import { SiCplusplus, SiPhp, SiMarkdown } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { VscJson } from "react-icons/vsc";
import { useAppContext } from "../../../contexts/AppContext";
import { languages } from "../../../languages/languages";

export default function BodyAbout() {
  const [selectedFile, setSelectedFile] = useState<string>("bio.md");
  const { theme, language } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const l = languages[language];

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
      }}
    >
      <div
        style={{
          width: "20.4%",
          height: "100%",
          backgroundColor: themeColors.primary,
          borderColor: themeColors.second,
          borderRightWidth: "1px",
          padding: "10px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Folder
          icon={<FolderIcon size={18} />}
          label={l.aboutMe}
          iconColor={themeColors.folder4}
          selected={selectedFile}
          subItems={[
            {
              label: l.bio,
              onClick: () => setSelectedFile("bio.md"),
              icon: <SiMarkdown size={18} />,
            },
            {
              label: l.hobbies,
              onClick: () => setSelectedFile("hobbies.php"),
              icon: <SiPhp size={18} />,
            },
          ]}
        />

        <Folder
          icon={<FolderIcon size={18} />}
          label={l.skills}
          iconColor={themeColors.folder5}
          selected={selectedFile}
          subItems={[
            {
              label: l.technologies,
              onClick: () => setSelectedFile("technologies.json"),
              icon: <VscJson size={18} />,
            },
            {
              label: l.languages,
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
          backgroundColor: themeColors.primary,
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
                backgroundColor: themeColors.scrollBg,
                borderRight: `1px solid ${themeColors.syntaxBorder}`,
                borderBottom: `1px solid ${themeColors.syntaxBorder}`,
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: themeColors.syntaxDefault,
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
                  color: themeColors.syntaxDefault,
                  cursor: "pointer",
                }}
              >
                <IoCloseSharp size={14} />
              </span>
            </div>

            {/* Conteúdo do arquivo */}
            <div
              className="json-scroll"
              style={{
                padding: "20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: themeColors.scrollBg,
                color: themeColors.syntaxDefault,
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <div>
                <span style={{ color: themeColors.syntaxKeyword }}>
                  {l.bioTitle}
                </span>
                {"\n\n"}
                <p>
                  {l.bioParagraph1}{" "}
                  <span style={{ color: themeColors.syntaxFunction }}>
                    Federal Center for Technological Education of Minas Gerais
                    (CEFET-MG)
                  </span>{" "}
                  {l.bioParagraph2}{" "}
                  <span style={{ color: themeColors.syntaxString }}>
                    Python
                  </span>
                  , <span style={{ color: themeColors.syntaxString }}>C++</span>
                  ,{" "}
                  <span style={{ color: themeColors.syntaxString }}>
                    JavaScript frameworks
                  </span>{" "}
                  (<span style={{ color: themeColors.syntaxType }}>NodeJS</span>
                  , <span style={{ color: themeColors.syntaxType }}>React</span>
                  ,{" "}
                  <span style={{ color: themeColors.syntaxType }}>
                    React Native
                  </span>
                  ),{" "}
                  <span style={{ color: themeColors.syntaxString }}>
                    TypeScript
                  </span>{" "}
                  (Express),{" "}
                  <span style={{ color: themeColors.syntaxString }}>HTML</span>,{" "}
                  <span style={{ color: themeColors.syntaxString }}>CSS</span>{" "}
                  and{" "}
                  <span style={{ color: themeColors.syntaxString }}>SQL</span>.
                </p>
                <p>{l.bioParagraph3}</p>
                <p>
                  {l.bioParagraph4}{" "}
                  <span style={{ color: themeColors.syntaxFunction }}>
                    Computer Science
                  </span>{" "}
                  {l.bioParagraph5}{" "}
                  <span style={{ color: themeColors.syntaxFunction }}>
                    Federal University of Lavras (UFLA)
                  </span>{" "}
                  {l.bioParagraph6}
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
                backgroundColor: themeColors.scrollBg,
                borderRight: `1px solid ${themeColors.syntaxBorder}`,
                borderBottom: `1px solid ${themeColors.syntaxBorder}`,
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: themeColors.syntaxDefault,
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
                  color: themeColors.syntaxDefault,
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
                backgroundColor: themeColors.scrollBg,
                color: themeColors.syntaxDefault,
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {"{\n"}
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxVariable }}>
                "languages"
              </span>
              : [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Python"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"C++"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                "JavaScript"
              </span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                "TypeScript"
              </span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"HTML"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"CSS"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Java"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxVariable }}>
                "frameworks"
              </span>
              : [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Next.js"</span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"React"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                "React Native"
              </span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Express"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxVariable }}>
                "databases"
              </span>
              : [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                "PostgreSQL"
              </span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"MySQL"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"MongoDB"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxVariable }}>"tools"</span>
              : [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Git"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>"Docker"</span>
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
                backgroundColor: themeColors.syntaxBackground,
                borderRight: `1px solid ${themeColors.syntaxBorder}`,
                borderBottom: `1px solid ${themeColors.syntaxBorder}`,
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: themeColors.syntaxDefault,
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
                  color: themeColors.syntaxDefault,
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
                backgroundColor: themeColors.syntaxBackground,
                color: themeColors.syntaxDefault,
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: themeColors.syntaxComment }}>
                {l.languageProficiency}
              </span>
              <br />
              <span style={{ color: themeColors.syntaxKeyword }}>
                #include
              </span>{" "}
              <span style={{ color: themeColors.syntaxString }}>
                &lt;iostream&gt;
              </span>
              <br />
              <span style={{ color: themeColors.syntaxKeyword }}>
                using
              </span>{" "}
              <span style={{ color: themeColors.syntaxVariable }}>
                namespace
              </span>{" "}
              std;
              <br />
              <br />
              <span style={{ color: themeColors.syntaxKeyword }}>int</span>{" "}
              <span style={{ color: themeColors.syntaxFunction }}>main</span>()
              &#123;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: themeColors.syntaxString }}>
                "{l.native}"
              </span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: themeColors.syntaxString }}>
                "{l.fluent}"
              </span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;cout &lt;&lt;{" "}
              <span style={{ color: themeColors.syntaxString }}>
                "{l.intermediate}"
              </span>{" "}
              &lt;&lt; endl;
              <br />
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxKeyword }}>
                return
              </span>{" "}
              0;
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
                backgroundColor: themeColors.syntaxBackground,
                borderRight: `1px solid ${themeColors.syntaxBorder}`,
                borderBottom: `1px solid ${themeColors.syntaxBorder}`,
                padding: "0 10px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                color: themeColors.syntaxDefault,
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
                  color: themeColors.syntaxDefault,
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
                backgroundColor: themeColors.syntaxBackground,
                color: themeColors.syntaxDefault,
                height: "100%",
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: themeColors.syntaxKeyword }}>&lt;?php</span>
              <br />
              <span style={{ color: themeColors.syntaxKeyword }}>
                class
              </span>{" "}
              <span style={{ color: themeColors.syntaxType }}>Hobbies</span>{" "}
              &#123;
              <br />
              &nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxKeyword }}>
                public
              </span>{" "}
              <span style={{ color: themeColors.syntaxKeyword }}>function</span>{" "}
              <span style={{ color: themeColors.syntaxFunction }}>list</span>()
              &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxKeyword }}>return</span> [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                {l.hobbiesMath}
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                {l.hobbiesGaming}
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                {l.hobbiesMovies}
              </span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                {l.hobbiesMusic}
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: themeColors.syntaxString }}>
                {l.hobbiesCoding}
              </span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;];
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <span style={{ color: themeColors.syntaxVariable }}>
                $myHobbies
              </span>{" "}
              = <span style={{ color: themeColors.syntaxKeyword }}>new</span>{" "}
              Hobbies();
              <br />
              <span style={{ color: themeColors.syntaxKeyword }}>print_r</span>
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
              backgroundColor: themeColors.syntaxBackground,
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
                color: themeColors.whiteHover,
              }}
            >
              <FolderIcon size={200} />
            </div>

            {/* Texto principal */}
            <span
              style={{
                fontSize: "18px",
                color: themeColors.syntaxDefault,
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {l.noFileSelected}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
