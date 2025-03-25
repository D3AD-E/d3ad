import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { navLinks } from "./Navbar.consts";
import { MY_CV, MY_GITHUB_URL, MY_LINKEDIN_URL } from "consts/common.consts";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="fixed w-full backdrop-blur-lg bg-black/50 z-50 border-b border-cyan-400/20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          0xCV
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <motion.a
              href={MY_GITHUB_URL}
              target="_blank"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={MY_LINKEDIN_URL}
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.a
            href={MY_CV}
            download="Yevhenii_Hordiienko_CV.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FiFileText className="w-5 h-5" />
            CV
          </motion.a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-300"></span>
              <span className="block w-6 h-0.5 bg-gray-300"></span>
              <span className="block w-4 h-0.5 bg-gray-300"></span>
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg p-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-cyan-400/10"
                    onClick={() => handleScroll(link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex justify-center gap-4 mt-4">
                  <a href={MY_GITHUB_URL} target="_blank">
                    <FiGithub className="text-cyan-400 w-6 h-6" />
                  </a>
                  <a href={MY_LINKEDIN_URL} target="_blank">
                    <FiLinkedin className="text-purple-400 w-6 h-6" />
                  </a>
                  <a href={MY_CV} download="Yevhenii_Hordiienko_CV.pdf">
                    <FiFileText className="text-gray-300 w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
