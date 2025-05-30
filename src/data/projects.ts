const PROJECTS: {
  name: string;
  description: string;
  previewImages: string[];
  repoUrl: string;
  liveLink: string;
  side: "top" | "bottom" | "left" | "right" | undefined;
}[] = [
  {
    name: "This website",
    description: "",
    liveLink: "",
    previewImages: ["images/website1.png"],
    repoUrl: "",
    side: "left"
  },
   {
    name: "Tidbit Social",
    description:
      "TidBit helps users manage their dining decisions helping them to find the perfect restaurant and best dishes worldwide. Built 50% of all the release versions using React Native and previously Ionic Framework before it's migration. Focused on building the UI and logic for all the tabs and sections of the app. ",
    liveLink: "",
    previewImages: ["images/tidbit_explore.png", "images/tidbit_map.png"],
    repoUrl: "",
    side: "left",
  },
  {
    name: "ENVSN",
    description:
      "iOS and Android application which helps you to find your way around ENVSN Festival. Participants can browse through panel discussion topics and find the speakers they want to hear. Ability to receive real-time event updates and plan the day with a customizable calendar. It's available in the US App Store and Google Play. Built 50% of the first release version using React Native.",
    liveLink: "",
    previewImages: ["images/envsn_sign.png", "images/envsn_agenda.png"],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Motorculture",
    description:
      "I contracted on Motorculture iOS and Android application which helps to coordinate car meets, find auto repair shops, car groups and more. Focused on the user following client side logic using React Native and Redux. The application is still in development.",
    liveLink: "",
    previewImages: [
      "images/motorculture-onboard.png",
      "images/motorculture-follow.png",
    ],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Cosmo App",
    description:
      "I contracted on Cosmo iOS and Android application which allows to purchase clothing, shoes, jewelry, and more directly and securely in just a few taps. You can sift through their special collections, add to favorites or check out the items you picked with delivery service to your door or get to the store later for pickup. Built all the UI of the favorites section, shipping method, pick up address selection and delivery address form. The application is still in development.",
    liveLink: "",
    previewImages: [],
    repoUrl: "",
    side: "left",
  },
  {
    name: "OTR Capital",
    description:
      "Senior Developer at OTR Capital, a transportation-focused factoring company specializing in providing reliable cash flow solutions for the industry.",
    liveLink: "",
    previewImages: ["images/otc1.png"],
    repoUrl: "",
    side: "left",
    },
    {
    name: "Envase Mobile",
    description:
      "Led the development of Envase Mobile, a mobile application empowering truck drivers to communicate with customers via Envase Portfolio TMS, enabling load tracking, document management, signature collection, and more.",
    liveLink: "",
    previewImages: ["images/envase1.png", "images/envase2.png"],
    repoUrl: "https://github.com",
    side: "left",
    },
    
];

export default PROJECTS;
