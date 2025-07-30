import { useAppContext } from "../../../contexts/AppContext";
import { colors, light_colors } from "../../../colors/colors";
import { languages } from "../../../languages/languages";

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const { theme, toggleTheme, language, setLanguage } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const l = languages[language];

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center">
      <div
        className="rounded-md p-6 border"
        style={{
          backgroundColor: themeColors.primary,
          borderColor: themeColors.second,
          color: themeColors.second,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 200,
        }}
      >
        <h2 className="text-lg mb-4">{l.settings}</h2>

        {/* Theme Switch */}
        <div className="flex items-center justify-between mb-4">
          <span>Theme: {theme === "dark" ? "Dark" : "Light"}</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full ${
                theme === "dark" ? "bg-orange-400" : "bg-gray-300"
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
        <div className="mb-4">
          <label className="block mb-1">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "pt" | "en" | "es")}
            className="px-2 py-1 rounded bg-transparent border border-current"
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
          </select>
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded border border-current hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
