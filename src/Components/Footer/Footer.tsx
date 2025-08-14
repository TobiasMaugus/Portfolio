import { colors, light_colors } from "../../colors/colors.ts";
import { useState } from "react";
import "./Footer.css";
import { LuSettings, LuMenu } from "react-icons/lu";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import SettingsModal from "../Pages/Settings/Modal.tsx";
import { useAppContext } from "../../contexts/AppContext.tsx";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;

  return (
    <>
      {/* Modal de configurações */}
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}

      {/* Footer */}
      <footer
        className="flex items-center justify-between border-b font-sans font-normal"
        style={{
          width: "95%",
          height: "7.5%",
          backgroundColor: themeColors.primary,
          borderColor: themeColors.second,
          borderWidth: "1px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 200,
          color: themeColors.second,
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
      >
        {/* Desktop */}
        <nav className="hidden md:flex flex-1 items-center">
          <div className="px-5 py-2 border-r border-custom">find me in: </div>
          <ul className="flex flex-grow">
            <a
              href="https://mail.google.com/mail/?view=cm&to=tobiasmaugus705@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h"
            >
              <SiGmail size={20} className="icon transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/tobias-maugus"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h"
            >
              <SiLinkedin
                size={20}
                className="icon transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/TobiasMaugus"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h"
            >
              <SiGithub
                size={20}
                className="icon transition-all duration-300"
              />
            </a>
          </ul>

          <button
            onClick={() => setShowModal(true)}
            className="icon-wrapper ml-auto px-3 py-2.5 border-l border-custom-h equal-width-h cursor-pointer"
          >
            <LuSettings
              size={20}
              className="icon transition-all duration-300"
            />
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden w-full justify-center px-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-lg"
            style={{ color: themeColors.second }}
          >
            <LuMenu size={24} />
          </button>
        </div>
      </footer>

      {/* Drawer mobile */}
      {drawerOpen && (
        <div
          className="fixed inset-x-0 bottom-0 p-4"
          style={{
            backgroundColor: themeColors.primary,
            borderTop: `1px solid ${themeColors.second}`,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <span style={{ color: themeColors.second }}>find me in:</span>
            <button
              onClick={() => setDrawerOpen(false)}
              style={{ color: themeColors.second }}
            >
              ✕
            </button>
          </div>

          <div className="flex justify-around mb-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=tobiasmaugus705@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size={24} style={{ color: themeColors.second }} />
            </a>
            <a
              href="https://www.linkedin.com/in/tobias-maugus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={24} style={{ color: themeColors.second }} />
            </a>
            <a
              href="https://github.com/TobiasMaugus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={24} style={{ color: themeColors.second }} />
            </a>
          </div>

          <button
            onClick={() => {
              setDrawerOpen(false);
              setShowModal(true);
            }}
            className="w-full py-2 border rounded-lg"
            style={{
              borderColor: themeColors.second,
              color: themeColors.second,
            }}
          >
            <LuSettings size={20} className="inline mr-2" /> Settings
          </button>
        </div>
      )}
    </>
  );
}
