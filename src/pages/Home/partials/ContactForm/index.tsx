import { motion } from "framer-motion";
import { FiSend, FiMessageSquare } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { TiThLarge } from "react-icons/ti";
import { MY_GITHUB_URL, MY_LINKEDIN_URL } from "consts/common.consts";
export const ContactForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.location.href = `mailto:evg.gordi@gmail.com?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 relative " id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build the Future
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20"
            >
              <div className="space-y-6">
                <div>
                  <label className="flex items-center text-purple-400 mb-2">
                    <TiThLarge className="mr-2" />
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center text-cyan-400 mb-2">
                    <FiMessageSquare className="mr-2" />
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all cursor-pointer"
                >
                  <FiSend className="w-5 h-5" />
                  Send
                </motion.button>
              </div>
            </form>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              whileHover={{ y: -3 }}
              href={MY_GITHUB_URL}
              target="_blank"
              className="p-3 bg-white/5 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              <SiGithub className="text-2xl text-cyan-400" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href={MY_LINKEDIN_URL}
              target="_blank"
              className="p-3 bg-white/5 rounded-lg hover:bg-purple-400/10 transition-colors"
            >
              <SiLinkedin className="text-2xl text-purple-400" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
