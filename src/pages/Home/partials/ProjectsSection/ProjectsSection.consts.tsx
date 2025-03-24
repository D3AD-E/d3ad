import { SiNextdotjs, SiReact } from "react-icons/si";
import { FaReact, FaDatabase } from "react-icons/fa";

export const projects = [
  {
    title: "AI RAG Solution",
    description: "Implemented documentation-based Q&A system",
    tech: [<SiNextdotjs />, <FaReact />],
    achievements: [
      "Reduced support queries by 40%",
      "Vector database integration",
      "CI/CD pipeline implementation",
    ],
  },
  {
    title: "Healthcare Network System",
    description: "Subsidized healthcare solution for medical facilities",
    tech: [<FaDatabase />, <SiReact />],
    achievements: [
      "Optimized SQL queries by 70%",
      "Mobile-first responsive design",
      "Azure cloud deployment",
    ],
  },
];
