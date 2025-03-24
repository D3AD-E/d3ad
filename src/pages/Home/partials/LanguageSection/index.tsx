import { motion } from "framer-motion";
import { languages } from "./LanguageSection.consts";

export const LanguageSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="py-20"
  >
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Language Stack
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
      {languages.map((language, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-purple-400/40 transition-all">
            <div className="text-4xl mb-4">{language.flag}</div>
            <span className="text-gray-200 block mb-1">{language.name}</span>
            <div
              className={`text-sm ${
                language.isNative ? "text-cyan-400" : "text-purple-400"
              }`}
            >
              {language.level}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
