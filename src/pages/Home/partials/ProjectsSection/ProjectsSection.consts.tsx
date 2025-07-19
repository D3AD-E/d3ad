import {
  SiDotnet,
  SiExpo,
  SiNodedotjs,
  SiReact,
  SiSolana,
  SiTypescript,
} from "react-icons/si";
import {
  FaDatabase,
  FaMicrosoft,
  FaNetworkWired,
  FaReact,
} from "react-icons/fa";
import { Project } from "./ProjectsSection.types";

export const projects: Project[] = [
  {
    title: "AI RAG",
    description: "Implemented documentation-based Q&A system",
    tech: [<FaMicrosoft />, <FaReact />],
    achievements: [
      "Vector database integration",
      "CI/CD pipeline implementation",
    ],
  },
  {
    title: "Fintech System",
    description: "Subsidized healthcare solution for medical facilities",
    tech: [<FaDatabase />, <SiReact />, <SiDotnet />],
    achievements: [
      "Optimized SQL queries by 70%",
      "Mobile-first responsive design",
      "Azure cloud deployment",
    ],
  },
  {
    title: "Water Appliance Mobile Platform",
    description: "Firmware update system for drinking water appliances",
    tech: [<SiReact />, <SiNodedotjs />, <FaNetworkWired />],
    achievements: ["Secure mobile update system"],
    technologyUsed: ["React Native", "Expo", "Axios"],
  },
  {
    title: "FoodTech Platform",
    description: "End-to-end food service management solution",
    tech: [<SiReact />, <SiExpo />, <SiTypescript />],
    achievements: [
      "Unified POS system integration",
      "Multi-vendor payment processing",
    ],
    technologyUsed: [
      "React Native",
      "TypeScript",
      "Expo",
      "Axios",
      "Redux Toolkit",
    ],
  },
  {
    title: "Solana Sniper",
    description:
      "Node.js TypeScript application for sniping new pairs on Raydium",
    tech: [<SiSolana />, <SiNodedotjs />, <SiTypescript />],
    achievements: [
      "Real-time pair detection algorithm",
      "Automated trading strategies",
      "Incredible performance, token buy in the block followind token creation",
      "RPC integration",
    ],
    technologyUsed: [
      "Solana Web3.js",
      "Raydium SDK",
      "Pumpfun SDK",
      "JitoLabs",
    ],
    githubUrl: "https://github.com/D3AD-E/Solana-sniper-bot",
  },
  {
    title: "Solana Pumpfun SDK",
    description:
      "High-level TypeScript SDK for Pump Fun. Buy, sell and create functions. Jito bundle send options. Added support for new events",
    tech: [<SiSolana />, <SiNodedotjs />, <SiTypescript />],
    achievements: ["npm package", "TypeScript support"],
    technologyUsed: ["Solana Web3.js"],
    githubUrl: "https://github.com/D3AD-E/pumpdotfun-repumped-sdk",
  },
];
