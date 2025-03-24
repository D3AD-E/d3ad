import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { getCurrentTheme } from "../../../services/localStorage/themeStorage/themeStorage";
import { Theme } from "services/localStorage/themeStorage/themeStorage.types";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme() || Theme.Light);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(theme);
  }, [theme]);

  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold">D3AD</h1>
      <div className="space-x-4 items-center flex">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <button
          onClick={() =>
            setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
          }
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === Theme.Light ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
