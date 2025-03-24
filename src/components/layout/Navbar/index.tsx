import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { getCurrentTheme } from "../../../services/localStorage/themeStorage/themeStorage";
import { Theme } from "services/localStorage/themeStorage/themeStorage.types";
import { motion } from "framer-motion";

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
    <nav className="fixed w-full backdrop-blur-lg bg-black/50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.span
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          0xCV
        </motion.span>

        {/* <div className="space-x-4 items-center flex">
          <button
            onClick={() =>
              setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
            }
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === Theme.Light ? <Moon /> : <Sun />}
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
