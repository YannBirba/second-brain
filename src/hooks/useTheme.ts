import { useEffect, useState } from "react";

const initialTheme = (): "dark" | "light" => {
  const theme = localStorage.getItem("second-brain-theme");
  if ((theme && theme === "dark") || theme === "light") {
    return theme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    setTheme(initialTheme());
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
    localStorage.setItem(
      "second-brain-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  const preferSystem = () => {
    localStorage.removeItem("second-brain-theme");
    setTheme(initialTheme());
  };

  return { theme, toggleTheme, preferSystem };
};
