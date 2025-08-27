import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Theme = "light" | "dark";

interface DarkModeToggleProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export default function DarkModeToggle({ theme, setTheme }: DarkModeToggleProps) {
  // Update DOM & localStorage whenever theme changes
  useEffect(() => {
    console.log("useEffect running, theme is now:", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-purple-50 dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} size="lg" className="text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" className="text-gray-900" />
      )}
    </button>
  );
}