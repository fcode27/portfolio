import {
  type IconType, SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs, SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiSwift,
  SiAndroid,
  SiKotlin, SiApple,
  SiDjango,
  SiDotnet
} from "@icons-pack/react-simple-icons";

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Mobile",
      skills: [
        { skill: "android", icon: SiAndroid },
        { skill: "ios", icon: SiApple },
        { skill: "kotlin", icon: SiKotlin },
        { skill: "react native", icon: SiReact },
        { skill: "swift", icon: SiSwift },
      ],
    },
    {
      field: "Frontend",
      skills: [
        {
          skill: "css",
          icon: SiCss3,
        },
        {
          skill: "html",
          icon: SiHtml5,
        },
        {
          skill: "javascript",
          icon: SiJavascript,
        },
        {
          skill: "nextjs",
          icon: SiNextdotjs,
        },
        {
          skill: "react",
          icon: SiReact,
        },
        {
          skill: "sass",
          icon: SiSass,
        },
        {
          skill: "tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
    {
      field: "Backend",
      skills: [
        {
          skill: "django",
          icon: SiDjango,
        },
        {
          skill: "ASP.NET",
          icon: SiDotnet,
        },
        {
          skill: "docker",
          icon: SiDocker,
        },
        {
          skill: "mongodb",
          icon: SiMongodb,
        },
        {
          skill: "mysql",
          icon: SiMysql,
        },
        {
          skill: "nodejs",
          icon: SiNodedotjs,
        },
        {
          skill: "postgresql",
          icon: SiPostgresql,
        },
      ],
    },
  ];

export default SKILLS;
