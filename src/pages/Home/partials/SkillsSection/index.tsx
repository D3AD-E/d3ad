import { motion } from "framer-motion";
import { skills } from "./SkillsSection.consts";

export const SkillsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Core Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 backdrop-blur-sm bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="text-4xl text-cyan-400 mb-4">{skill.icon}</div>
            <h3 className="text-gray-200 font-medium">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
