export type Skill = {
  icon: React.ReactNode;
  name: string;
  category: SkillCategoryType;
};

export type SkillCategory = {
  id: SkillCategoryType;
  name: string;
};

export enum SkillCategoryType {
  Language = "language",
  Framework = "framework",
  Tool = "tool",
  Web3 = "web3",
  Cloud = "cloud",
  UI = "ui",
  Other = "other",
}
