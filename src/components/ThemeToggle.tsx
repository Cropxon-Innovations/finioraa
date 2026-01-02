import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage or default to dark
    const storedTheme = localStorage.getItem("finioraa-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
    document.documentElement.classList.toggle("light", !initialDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("finioraa-theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
    document.documentElement.classList.toggle("light", !newIsDark);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-muted border border-border p-0.5 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-5 h-5 rounded-full flex items-center justify-center ${
          isDark 
            ? "bg-primary ml-auto" 
            : "bg-accent ml-0"
        }`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-primary-foreground" />
          ) : (
            <Sun className="w-3 h-3 text-accent-foreground" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
