import { useTheme } from "./ThemeContext";

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <button
      onClick={toggleColorMode}
      className="p-2 rounded bg-theme-primary text-white"
    >
      {colorMode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
