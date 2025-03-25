import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { MY_CV, MY_GITHUB_URL } from "consts/common.consts";

export const HeroSection = () => (
  <section className="items-center pt-40" id="hero">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 50, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Yevhenii Hordiienko
          </span>
        </h1>
        <span className="block text-lg text-purple-400 mt-2">
          Senior Developer
        </span>
        <TypeAnimation
          sequence={[
            "Full-Cycle Web Application Development",
            2000,
            "Open Source Contributor",
            2000,
            "Full-Stack Dev",
            2000,
            "Building decentralized futures",
            2000,
          ]}
          wrapper="div"
          className="text-2xl text-gray-400 mb-8"
          repeat={Infinity}
        />

        <div className="flex gap-4">
          <a
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
            href={MY_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <a
            className="border border-cyan-400/30 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400/10 transition-colors"
            href={MY_CV}
            download="Yevhenii_Hordiienko_CV.pdf"
          >
            Explore CV
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
