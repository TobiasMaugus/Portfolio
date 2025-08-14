import { useAppContext } from "../../../contexts/AppContext";
import { colors, light_colors } from "../../../colors/colors";
import { languages } from "../../../languages/languages";

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const { theme, toggleTheme, language, setLanguage } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const l = languages[language];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        className="rounded-md p-6 border w-[400px] flex flex-col items-center" // <-- largura aumentada + centralização
        style={{
          backgroundColor: themeColors.primary,
          borderColor: themeColors.second,
          color: themeColors.second,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 200,
        }}
      >
        <h2 className="text-lg mb-4 text-center" style={{ fontWeight: 300 }}>
          {l.settings}
        </h2>

        {/* Theme Switch */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {" "}
          {/* <-- centralização */}
          <span>
            {l.theme}: {theme === "dark" ? l.dark : l.light}
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full ${
                theme === "dark" ? "bg-purple-500" : "bg-blue-400"
              } relative transition`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  theme === "dark" ? "translate-x-5" : ""
                }`}
              />
            </div>
          </label>
        </div>

        {/* Language Select */}
        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-1">{l.language}</label>
          <div className="relative inline-block w-40">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "pt" | "en" | "es")
              }
              className="w-full px-3 py-1 rounded border border-current text-center"
              style={{
                backgroundColor: themeColors.primary, // fundo do select
                color: themeColors.second, // cor do texto
                borderColor: themeColors.second, // cor da borda
              }}
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded border border-current hover:bg-gray-800 transition"
        >
          {l.close}
        </button>
      </div>
    </div>
  );
}
