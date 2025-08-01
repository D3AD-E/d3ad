import {
  SiSolidity,
  SiEthereum,
  SiReact,
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiTerraform,
  SiTypescript,
  SiSolana,
} from "react-icons/si";
import { FaMicrosoft, FaAws, FaCode, FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SkillCategoryType, Skill, SkillCategory } from "./SkillSection.types";
import { GiMeshNetwork } from "react-icons/gi";
import { TbArrowUpCircleFilled } from "react-icons/tb";

export const skillCategories: SkillCategory[] = [
  { id: SkillCategoryType.Language, name: "Programming Languages" },
  { id: SkillCategoryType.Framework, name: "Frameworks & Libraries" },
  { id: SkillCategoryType.Tool, name: "DevOps & Tools" },
  { id: SkillCategoryType.Web3, name: "Web3 & Blockchain" },
  { id: SkillCategoryType.Cloud, name: "Cloud Platforms" },
  { id: SkillCategoryType.UI, name: "UI/UX & Design" },
  { id: SkillCategoryType.Other, name: "Other Skills" },
];

export const skills: Skill[] = [
  // Programming Languages
  { icon: <FaCode />, name: "C#", category: SkillCategoryType.Language },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    category: SkillCategoryType.Language,
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    category: SkillCategoryType.Language,
  },
  { icon: <SiPostgresql />, name: "SQL", category: SkillCategoryType.Language },
  {
    icon: <SiSolidity />,
    name: "Solidity",
    category: SkillCategoryType.Language,
  },

  // Frameworks/Libraries
  { icon: <SiDotnet />, name: ".NET", category: SkillCategoryType.Framework },
  { icon: <SiReact />, name: "React", category: SkillCategoryType.Framework },
  {
    icon: <GrReactjs />,
    name: "React Native",
    category: SkillCategoryType.Framework,
  },
  { icon: <FaNodeJs />, name: "NodeJS", category: SkillCategoryType.Framework },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    category: SkillCategoryType.Framework,
  },
  {
    icon: <SiDotnet />,
    name: "Entity Framework",
    category: SkillCategoryType.Framework,
  },

  // Web3 Skills
  { icon: <SiEthereum />, name: "Ethereum", category: SkillCategoryType.Web3 },
  { icon: <SiSolana />, name: "Solana", category: SkillCategoryType.Web3 },
  {
    icon: <SiJavascript />,
    name: "ethers.js",
    category: SkillCategoryType.Web3,
  },
  {
    icon: <GiMeshNetwork />,
    name: "Node Setup",
    category: SkillCategoryType.Web3,
  },
  {
    icon: <TbArrowUpCircleFilled />,
    name: "Jito",
    category: SkillCategoryType.Web3,
  },

  // Tools
  { icon: <SiGit />, name: "Git", category: SkillCategoryType.Tool },
  {
    icon: <FaMicrosoft />,
    name: "Azure DevOps",
    category: SkillCategoryType.Tool,
  },
  { icon: <SiDocker />, name: "Docker", category: SkillCategoryType.Tool },
  {
    icon: <SiTerraform />,
    name: "Terraform",
    category: SkillCategoryType.Tool,
  },

  // Cloud
  { icon: <FaAws />, name: "AWS", category: SkillCategoryType.Cloud },
  {
    icon: <FaMicrosoft />,
    name: "Azure Cloud",
    category: SkillCategoryType.Cloud,
  },

  // UI/UX
  { icon: <SiCss3 />, name: "CSS", category: SkillCategoryType.UI },
  { icon: <SiBootstrap />, name: "Bootstrap", category: SkillCategoryType.UI },
  { icon: <SiAntdesign />, name: "Ant Design", category: SkillCategoryType.UI },

  // Other
  {
    icon: <SiOpenai />,
    name: "Prompt Engineering",
    category: SkillCategoryType.Other,
  },
];
