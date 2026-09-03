import { useMemo, useState } from "react";
import ThemeContext from "./ThemeContextValue";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light"
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app-theme app-theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
