// src/contexts/AppContext.tsx
import { createContext, useContext, useState } from "react";

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

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
}
