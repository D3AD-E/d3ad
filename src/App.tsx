// App.tsx
import Navbar from "components/layout/Navbar";
import { motion } from "framer-motion";
import { Home } from "pages/Home";

const App = () => {
  return (
    <div className="relative min-h-screen text-gray-300 overflow-x-hidden pb-20">
      <div className="fixed inset-0 bg-black -z-50 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-black/80" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            y: [0, -100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400/20 rounded-full"
          animate={{
            scale: [1, 2, 1],
            y: [0, 80, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <Navbar />

      <Home />

      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full relative">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full absolute top-1 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span className="text-sm text-cyan-400/50">Explore</span>
      </motion.div>
    </div>
  );
};

export default App;
