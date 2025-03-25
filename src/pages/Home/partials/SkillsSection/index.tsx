import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skillCategories, skills } from "./SkillsSection.consts";
import { SkillCategoryType } from "./SkillSection.types";

export const SkillsSection = () => {
  const [openCategories, setOpenCategories] = useState<SkillCategoryType[]>([]);

  const getSkillsByCategory = (category: string) =>
    skills.filter((skill) => skill.category === category);

  const toggleCategory = (categoryId: SkillCategoryType) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Core Stack
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = getSkillsByCategory(category.id);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between mb-6 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: openCategories.includes(category.id) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openCategories.includes(category.id) && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                          height: { delay: 0.1 }, // Let opacity fade first
                        },
                      }}
                      className="overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: index * 0.05,
                              type: "spring",
                              stiffness: 100,
                            },
                          }}
                          exit={{
                            scale: 0,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                          className="p-4 backdrop-blur-sm bg-white/5 rounded-xl"
                        >
                          <div className="text-3xl text-cyan-400 mb-2">
                            {skill.icon}
                          </div>
                          <span className="text-gray-200 text-sm">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
