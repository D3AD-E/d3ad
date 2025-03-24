import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Hi, I'm a Fullstack Developer</h1>
      <p className="text-lg mt-2">Specializing in React, C#, Web3 & AI</p>
    </motion.div>
  );
};

export default Home;
