import type { ReactNode } from "react";
import { colors, light_colors } from "../colors/colors.ts";
import { useAppContext } from "../contexts/AppContext.tsx";

type BgProps = {
  children?: ReactNode;
};

export default function Bg({ children }: BgProps) {
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: themeColors.bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "3.5%",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
