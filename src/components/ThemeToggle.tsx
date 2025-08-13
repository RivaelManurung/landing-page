import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme");
    const initial = saved ? saved === "dark" : isDark;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl border border-ink-200 dark:border-ink-700 px-3 py-2 text-sm font-medium text-ink-800 dark:text-ink-100 hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
      aria-label="Toggle theme"
    >
      <span className="inline-block h-4 w-4 rounded-full bg-ink-800 dark:bg-white" />
      {dark ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
