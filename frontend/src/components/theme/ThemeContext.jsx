import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const ThemeContext = createContext(undefined);

export const themes = [
  {
    id: "default",
    name: "Calming Green",
    description: "Peaceful and grounding",
    colors: {
      primary: "142, 76%, 36%",
      calm: "142, 76%, 36%",
      background: "142, 76%, 96%",
    },
    darkColors: {
      primary: "142, 76%, 36%",
      calm: "142, 76%, 36%",
      background: "142, 76%, 8%",
    },
  },
  {
    id: "ocean",
    name: "Ocean Blue",
    description: "Tranquil and serene",
    colors: {
      primary: "199, 89%, 48%",
      calm: "199, 89%, 48%",
      background: "199, 89%, 96%",
    },
    darkColors: {
      primary: "199, 89%, 48%",
      calm: "199, 89%, 48%",
      background: "199, 89%, 8%",
    },
  },
  {
    id: "sunset",
    name: "Warm Sunset",
    description: "Comforting and nurturing",
    colors: {
      primary: "14, 91%, 60%",
      calm: "340, 82%, 52%",
      background: "14, 91%, 96%",
      // primaryboarder:"14, 91%, 60%"
    },
    darkColors: {
      primary: "14, 91%, 60%",
      calm: "340, 82%, 52%",
      background: "14, 91%, 8%",
     
    },
  },
  {
    id: "forest",
    name: "Deep Forest",
    description: "Grounding and stable",
    colors: {
      primary: "158, 64%, 52%",
      calm: "158, 64%, 52%",
      background: "158, 64%, 96%",
    },
    darkColors: {
      primary: "158, 64%, 52%",
      calm: "158, 64%, 52%",
      background: "158, 64%, 8%",
    },
  },
  {
    id: "lavender",
    name: "Soft Lavender",
    description: "Soothing and gentle",
    colors: {
      primary: "262, 83%, 58%",
      calm: "262, 83%, 58%",
      background: "262, 83%, 96%",
    },
    darkColors: {
      primary: "262, 83%, 58%",
      calm: "262, 83%, 58%",
      background: "262, 83%, 8%",
    },
  },
  {
    id: "neutral",
    name: "Minimal Gray",
    description: "Clean and focused",
    colors: {
      primary: "220, 14%, 46%",
      calm: "220, 14%, 46%",
      background: "220, 14%, 96%",
    },
    darkColors: {
      primary: "220, 14%, 46%",
      calm: "220, 14%, 46%",
      background: "220, 14%, 8%",
    },
  },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);
  const [colorMode, setColorMode] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("mindspace-theme");
    const savedColorMode = localStorage.getItem("mindspace-color-mode");

    const fallbackColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const nextTheme = themes.find((t) => t.id === savedTheme) ? savedTheme : "default";
    const nextColorMode = savedColorMode === "dark" || savedColorMode === "light"
      ? savedColorMode
      : fallbackColorMode;

    setTheme(nextTheme);
    setColorMode(nextColorMode);
    setIsLoaded(true);
  }, []);

  useLayoutEffect(() => {
    if (!theme || !colorMode) return;

    const currentTheme = themes.find((t) => t.id === theme);
    const colors = colorMode === "dark" ? currentTheme.darkColors : currentTheme.colors;

    for (const key in colors) {
      document.documentElement.style.setProperty(`--theme-${key}`, colors[key]);
    }

    document.documentElement.classList.toggle("dark", colorMode === "dark");

    localStorage.setItem("mindspace-theme", theme);
    localStorage.setItem("mindspace-color-mode", colorMode);
  }, [theme, colorMode]);

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!isLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorMode, toggleColorMode, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
