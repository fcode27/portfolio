import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiSwift,
  SiAndroid,
  SiKotlin,
  SiIos,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Mobile",
      skills: [
        { skill: "android", icon: SiAndroid },
        { skill: "ios", icon: SiIos },
        { skill: "kotlin", icon: SiKotlin },
        { skill: "swift", icon: SiSwift },
        { skill: "react native", icon: SiReact },
      ],
    },
    {
      field: "Frontend",
      skills: [
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
        { skill: "javascript", icon: SiJavascript },
        { skill: "react", icon: SiReact },
        { skill: "sass", icon: SiSass },
        { skill: "tailwind", icon: SiTailwindcss },
        { skill: "nextjs", icon: SiNextdotjs },
        { skill: "iOS", icon: SiIos },
        { skill: "nextjs", icon: SiAndroid },
        { skill: "nextjs", icon: SiKotlin },
        { skill: "nextjs", icon: SiSwift },
        {
          skill: "bootstrap",
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: "Backend",
      skills: [
        {
          skill: "nodejs",
          icon: SiNodedotjs,
        },
        {
          skill: "postgresql",
          icon: SiPostgresql,
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
          skill: "nginx",
          icon: SiNginx,
        },
        {
          skill: "docker",
          icon: SiDocker,
        },
      ],
    },
  ];

export default SKILLS;
