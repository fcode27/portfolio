// TODO: update to "/static/images/projects/";
const pathPrefix = process.env.NODE_ENV === "production" ? "/portfolio/": "";
const PROJECTS: {
  name: string;
  description: string;
  previewImages: string[];
  repoUrl: string;
  liveLink: string;
  side: "top" | "bottom" | "left" | "right" | undefined;
}[] = [
  {
    name: "Portfolio",
    description:
      "A personal portfolio project built with Next.js and TypeScript, designed to showcase a collection of software development projects. This responsive and dynamic website features a clean design and easy navigation, highlighting work with React, mobile applications, and backend technologies. Visitors can explore various projects and find contact information for inquiries.",
    liveLink: "",
      previewImages: [`${pathPrefix}website1.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Dining Decision Manager App",
    description:
      "An app that helps users manage their dining decisions and find the perfect restaurant and best dishes worldwide. Built 50% of all the release versions using React Native and previously Ionic Framework before it's migration. Focused on building the UI and logic for all the tabs and sections of the app.",
    liveLink: "",
    previewImages: [`${pathPrefix}dining1.png`, `${pathPrefix}dining2.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "EV Navigator App",
    description:
      "An Android app developed in Kotlin that provides analytics for electric vehicles and maps charging stations. Users can track performance and find charging options.",
    liveLink: "",
    previewImages: [`${pathPrefix}ev1.png`, `${pathPrefix}ev2.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Fintech App",
    description:
      "A user-friendly trading app built on Swift, empowering users to buy and sell stocks and ETFs. It features real-time market data and customizable watchlists.",
    liveLink: "",
    previewImages: [`${pathPrefix}fintech1.png`, `${pathPrefix}fintech2.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Festival Navigator App",
    description:
      "An app that helps users find their way around the festival. Participants can browse through panel discussion topics and find the speakers they want to hear. Ability to receive real-time event updates and plan the day with a customizable calendar. It's available in the US App Store and Google Play. Built 50% of the first release version using React Native.",
    liveLink: "",
    previewImages: [
      `${pathPrefix}festival_sign.webp`,
      `${pathPrefix}festival_agenda.webp`,
    ],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Car Community Coordinator App",
    description:
      "Android application which helps to coordinate car meets, find auto repair shops, car groups and more. Focused on the user following client side logic using React Native and Redux. The application is still in development.",
    liveLink: "",
    previewImages: [
      `${pathPrefix}car-community2.png`,
      `${pathPrefix}car-community.png`,
    ],
    repoUrl: "",
    side: "left",
  },
  {
    name: "QuickShop Fashion App",
    description:
      "An app that allows users to purchase clothing, shoes, jewelry, and more directly and securely in just a few taps. You can sift through their special collections, add to favorites or check out the items you picked with delivery service to your door or get to the store later for pickup. Built all the UI of the favorites section, shipping method, pick up address selection and delivery address form.",
    liveLink: "",
    previewImages: [`${pathPrefix}quickshop1.png`, `${pathPrefix}quickshop2.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Transport Finance Solutions App",
    description:
      "A transportation-focused factoring company specializing in providing reliable cash flow solutions for the industry.",
    liveLink: "",
    previewImages: [`${pathPrefix}transport-finance1.png`],
    repoUrl: "",
    side: "left",
  },
  {
    name: "Truck Driver Connect App",
    description:
      "A mobile application empowering truck drivers to communicate with customers, enabling load tracking, document management, signature collection, and more.",
    liveLink: "",
    previewImages: [
      `${pathPrefix}truck-drivers1.png`,
      `${pathPrefix}truck-drivers2.png`,
    ],
    repoUrl: "",
    side: "left",
  },
];

export default PROJECTS;
