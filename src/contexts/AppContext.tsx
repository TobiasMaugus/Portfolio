// src/contexts/AppContext.tsx
import { createContext, useContext, useState } from "react";
import { colors, light_colors } from "../colors/colors"; // ajuste o caminho se necessário

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  language: "pt" | "en" | "es";
  setLanguage: (lang: "pt" | "en" | "es") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"pt" | "en" | "es">("en");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Escolhe o conjunto de cores com base no tema
  const themeColors = theme === "dark" ? colors : light_colors;

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage }}>
      <div
        className={theme === "dark" ? "dark" : ""}
        style={
          {
            "--accent-color": themeColors.accent,
            "--second-color": themeColors.second,
            "--white-hover-color": themeColors.whiteHover,
            "--scroll-bg": themeColors.scrollBg,
            "--scroll-bar": themeColors.scrollBar,
            "--scroll-hover": themeColors.scrollHover,
            "--folder-hover": themeColors.folderHover,
            "--modal-overlay":
              theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
            "--gradient-circle":
              theme === "dark"
                ? "rgba(0, 255, 210, 0.1)"
                : "rgba(180, 100, 255, 0.2)",
            "--gradient-bg":
              theme === "dark" ? "rgba(10, 10, 30, 1)" : "#ffffff",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
}
