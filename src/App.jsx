import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState("light");

  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(`${theme}-theme`);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Header />
      <Main />
      <ThemeToggle theme={theme} onClick={toggleTheme} />
    </>
  );
}
