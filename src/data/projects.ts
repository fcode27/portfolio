const pathPrefix = process.env.NODE_ENV === "production" ? "/portfolio/" : "";
const PROJECTS: {
  name: string;
  description: string;
  previewImages: { previewImage: string; blurredImage: string }[];
  repoUrl: string;
  liveLink: string;
  side: "top" | "bottom" | "left" | "right" | undefined;
}[] = [
  {
    name: "EV Navigator App",
    description:
      "An Android app developed in Kotlin that provides analytics for electric vehicles and maps charging stations. Users can track performance and find charging options.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}ev1.png`,
        blurredImage: `${pathPrefix}ev1-blur.png`,
      },
      {
        previewImage: `${pathPrefix}ev2.png`,
        blurredImage: `${pathPrefix}ev2-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio project built with Next.js and TypeScript, designed to showcase a collection of software development projects. This responsive and dynamic website features a clean design and easy navigation, highlighting work with React, mobile applications, and backend technologies. Visitors can explore various projects and find contact information for inquiries.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}website1.png`,
        blurredImage: `${pathPrefix}website1-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Dining Decision Manager App",
    description:
      "An app that helps users manage their dining decisions and find the perfect restaurant and best dishes worldwide. Built 50% of all the release versions using React Native and previously Ionic Framework before it's migration. Focused on building the UI and logic for all the tabs and sections of the app.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}dining1.png`,
        blurredImage: `${pathPrefix}dining1-blur.png`,
      },
      {
        previewImage: `${pathPrefix}dining2.png`,
        blurredImage: `${pathPrefix}dining2-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },

  {
    name: "Fintech App",
    description:
      "A user-friendly trading app built on Swift, empowering users to buy and sell stocks and ETFs. It features real-time market data and customizable watchlists.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}fintech1.png`,
        blurredImage: `${pathPrefix}fintech1-blur.png`,
      },
      {
        previewImage: `${pathPrefix}fintech2.png`,
        blurredImage: `${pathPrefix}fintech2-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Festival Navigator App",
    description:
      "An app that helps users find their way around the festival. Participants can browse through panel discussion topics and find the speakers they want to hear. Ability to receive real-time event updates and plan the day with a customizable calendar. It's available in the US App Store and Google Play. Built 50% of the first release version using React Native.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}festival_sign.webp`,
        blurredImage: `${pathPrefix}festival_sign-blur.png`,
      },
      {
        previewImage: `${pathPrefix}festival_agenda.webp`,
        blurredImage: `${pathPrefix}festival_agenda-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Car Community Coordinator App",
    description:
      "Android application which helps to coordinate car meets, find auto repair shops, car groups and more. Focused on the user following client side logic using React Native and Redux. The application is still in development.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}car-community2.png`,
        blurredImage: `${pathPrefix}car-community2-blur.png`,
      },
      {
        previewImage: `${pathPrefix}car-community.png`,
        blurredImage: `${pathPrefix}car-community-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "QuickShop Fashion App",
    description:
      "An app that allows users to purchase clothing, shoes, jewelry, and more directly and securely in just a few taps. You can sift through their special collections, add to favorites or check out the items you picked with delivery service to your door or get to the store later for pickup. Built all the UI of the favorites section, shipping method, pick up address selection and delivery address form.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}quickshop1.png`,
        blurredImage: `${pathPrefix}quickshop1-blur.png`,
      },
      {
        previewImage: `${pathPrefix}quickshop2.png`,
        blurredImage: `${pathPrefix}quickshop2-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Transport Finance Solutions App",
    description:
      "A transportation-focused factoring company specializing in providing reliable cash flow solutions for the industry.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}transport-finance1.png`,
        blurredImage: `${pathPrefix}transport-finance1-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
  {
    name: "Truck Driver Connect App",
    description:
      "A mobile application empowering truck drivers to communicate with customers, enabling load tracking, document management, signature collection, and more.",
    liveLink: "",
    previewImages: [
      {
        previewImage: `${pathPrefix}truck-drivers1.png`,
        blurredImage: `${pathPrefix}truck-drivers1-blur.png`,
      },
      {
        previewImage: `${pathPrefix}truck-drivers2.png`,
        blurredImage: `${pathPrefix}truck-drivers2-blur.png`,
      },
    ],
    repoUrl: "",
    side: "right",
  },
];

export default PROJECTS;
