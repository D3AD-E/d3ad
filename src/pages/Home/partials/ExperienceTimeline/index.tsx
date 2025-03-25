import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experiences } from "./ExperienceTimeline.consts";

export const ExperienceTimeline = () => (
  <section className="py-20" id="experience">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Career Path
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/30 to-purple-500/30" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative mb-12 ${
              idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
            } md:w-1/2 ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          >
            <div
              className={`p-6 bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl relative ${
                idx % 2 === 0 ? "md:mr-6" : "md:ml-6"
              }`}
            >
              <div
                className={`absolute top-6 -m-4 p-2 bg-cyan-400 rounded-full ${
                  idx % 2 === 0 ? "-right-6" : "-left-6"
                }`}
              >
                <FiBriefcase className="text-black" />
              </div>

              <span className="text-cyan-400 text-sm">{exp.date}</span>
              <h3 className="text-xl font-bold text-gray-100 mt-2">
                {exp.position}
              </h3>
              <p className="text-purple-400 mb-4">{exp.company}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
