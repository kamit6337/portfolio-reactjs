import CustomImages from "@/assets/images";
import generateRandomID from "@/utils/javascript/generateRandomID";

export const navLinkList = [
  { name: "HOME", href: "hero" },
  { name: "SKILLS", href: "skills" },
  { name: "PROJECTS", href: "projects" },
  { name: "ABOUT", href: "about" },
  { name: "CONTACT", href: "contact" },
];

export const skillsList = [
  {
    id: generateRandomID(),
    name: "React JS",
    designation: "UI/UX Website",
    image: CustomImages.reactjs,
  },
  {
    id: generateRandomID(),
    name: "Tailwind CSS",
    designation: "UI/UX Website",
    image: CustomImages.tailwindCSS,
  },
  {
    id: generateRandomID(),
    name: "ShadCN/UI",
    designation: "UI/UX Website",
    image: CustomImages.shadcn,
  },
  {
    id: generateRandomID(),
    name: "React Query",
    designation: "Caching Http Get request",
    image: CustomImages.reactQuery,
  },
  {
    id: generateRandomID(),
    name: "Redux",
    designation: "Caching Http Get request",
    image: CustomImages.redux,
  },
  {
    id: generateRandomID(),
    name: "GraphQL",
    designation: "Caching Http Get request",
    image: CustomImages.graphql,
  },
  {
    id: generateRandomID(),
    name: "Node JS",
    designation: "Javascript Server Runtime",
    image: CustomImages.nodejs,
  },
  {
    id: generateRandomID(),
    name: "Express JS",
    designation: "Backend Server",
    image: CustomImages.expressjs,
  },
  {
    id: generateRandomID(),
    name: "MongoDB",
    designation: "No-SQL Database",
    image: CustomImages.mongodb,
  },
  {
    id: generateRandomID(),
    name: "Mongoose",
    designation: "MongoDB ODM",
    image: CustomImages.mongoose,
  },
  {
    id: generateRandomID(),
    name: "Redis",
    designation: "MongoDB ODM",
    image: CustomImages.redis,
  },
  {
    id: generateRandomID(),
    name: "AWS",
    designation: "MongoDB ODM",
    image: CustomImages.aws,
  },
  {
    id: generateRandomID(),
    name: "Next JS",
    designation: "a React Framework",
    image: CustomImages.nextjs,
  },
  {
    id: generateRandomID(),
    name: "Next Auth",
    designation: "Next JS Authentication",
    image: CustomImages.nextAuth,
  },
  {
    id: generateRandomID(),
    name: "Docker",
    designation: "Next JS Authentication",
    image: CustomImages.docker,
  },
  {
    id: generateRandomID(),
    name: "Github",
    designation: "making User Session",
    image: CustomImages.github,
  },
  {
    id: generateRandomID(),
    name: "Json Web Token",
    designation: "making User Session",
    image: CustomImages.jsonwebtoken,
  },
  {
    id: generateRandomID(),
    name: "Socket IO",
    designation: "bi-directional communication",
    image: CustomImages.socketIO,
  },

  {
    id: generateRandomID(),
    name: "Axios",
    designation: "RestAPI request",
    image: CustomImages.axios,
  },
];
