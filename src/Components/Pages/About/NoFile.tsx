import { colors } from "../../../colors/colors";

export default function NoFile() {
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
          width: "17.25%",
          height: "100%",
          backgroundColor: colors.primary,
          borderColor: colors.second,
          borderRightWidth: "1px",
        }}
      ></div>
      <h1 style={{ color: "#F5A623" }}>No file selected</h1>
    </div>
  );
}
