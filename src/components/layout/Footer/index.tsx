import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-4 text-center shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-6">
          <a
            href="https://github.com/D3AD-E"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yevhenii-hordiienko/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:evg.gordi@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Yevhenii Hordiienko
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
