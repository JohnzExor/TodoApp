import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div>
      <TodoWrapper toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
