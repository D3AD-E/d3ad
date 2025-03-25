import { motion } from "framer-motion";
import { projects } from "./ProjectsSection.consts";
import { FiGitBranch, FiGithub, FiStar } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Project } from "./ProjectsSection.types";
import { fetchGitHubStats } from "services/api/gitHubStats/gitHubStats";

export const ProjectsSection = () => {
  const [projectsWithStats, setProjectsWithStats] =
    useState<Project[]>(projects);
  useEffect(() => {
    const loadStats = async () => {
      const updatedProjects = await fetchGitHubStats(projects);
      setProjectsWithStats(updatedProjects);
    };

    loadStats();
  }, []);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Key Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsWithStats.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {project.githubUrl ? (
                    <div className="flex justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                      >
                        {project.title}
                        <FiGithub className="inline-block ml-2 text-lg" />
                      </a>
                      {project.githubStats && (
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <FiStar className="text-yellow-400" />
                            {project.githubStats.stars}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <FiGitBranch className="text-cyan-400" />
                            {project.githubStats.forks}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex gap-3 mb-4 text-2xl text-purple-400">
                  {project.tech.map((Icon, i) => (
                    <span key={i} className="p-2 bg-white/5 rounded-lg">
                      {Icon}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  {project.technologyUsed && (
                    <div className="mb-4">
                      <h4 className="text-cyan-400 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologyUsed.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <h4 className="text-cyan-400">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
