import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const ThemeContext = createContext();

// ThemeProvider component that provides theme state and toggle function to children
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");  // Default to light theme

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Apply theme changes to the body element
  useEffect(() => {
    // Check localStorage to get the saved theme or use the system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []); // Only run once on mount

  // Apply theme to the body element
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save the theme to localStorage
  }, [theme]);

  // Return the context provider with the theme value and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context values
export const useTheme = () => useContext(ThemeContext);
