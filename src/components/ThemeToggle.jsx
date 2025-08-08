import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";

export default function ThemeToggle({ theme, ...props }) {
  return (
    <button {...props} className="theme-toggler">
      {theme === "light" ? <GoSun /> : <GoMoon />}
    </button>
  );
}
