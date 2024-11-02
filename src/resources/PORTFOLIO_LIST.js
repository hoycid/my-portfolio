import links from "./links";
import images from "./images";
import { icons } from "./images";

const PORTFOLIO_LIST = [
  {
    title: "Souls Fashion",
    image: images.fashion,
    description:
      "Fashion Souls is a stylish fashion tool for the SoulsBorne community, developed by Psyopgirl. As a contributing front-end developer and designer, I focused on crafting a seamless user experience by applying UI/UX principles. The project utilized vanilla JavaScript for the interface, while Python managed image and file processing on the back end. The creator and I are currently working on further developments, with additions such as an outfit system on the way. The site has received a fantastic response, averaging about 30,000 visits daily, which speaks volumes about its utility and popularity among fans.",
    technology: { javascript: icons.js, python: icons.python },
    link: links.fashion,
    github: links.fashionGithub,
  },
  {
    title: "Elden Ring Character Planner (WIP)",
    image: images.er,
    description:
      "This web application simulates the character leveling and stat system of the popular video game Elden Ring, allowing players to strategise and optimise their builds in a user-friendly environment. Users can experiment with different character attributes and see how each choice impacts their gameplay, making it an invaluable tool for both new and seasoned players looking to maximise their potential in the game both in PvE and PvP. The site was built with react and closely follows a component-based architecture and fetches and saves data through an ExpressJs API and to a NodeJs server deployed in Railway.app.",
    technology: {
      javascript: icons.js,
      react: icons.react,
      nodejs: icons.nodejs,
      express: icons.express,
      sqlite: icons.sqlite,
    },
    link: links.er,
    github: links.erGithub,
  },
  {
    title: "Portfolio website",
    image: images.portfolio,
    description:
      "This is my personal portfolio website. designed to demonstrate my web development/design skills and showcase my work. Built with React, the site follows proper component-based architecture practices, enabling me to write less code by reusing components. Beyond showcasing my technical abilities, my portfolio reflects my creative preference for simplicity and user-friendly design which is conveyed throughout this site. For this site specifically, I employed a Swiss design approach, utilising grids to distribute elements. Feel free to explore my projects and see what I've been up to.",
    technology: {
      javascript: icons.js,
      react: icons.react,
    },
    link: links.portfolio,
    github: links.portfolioGithub,
  },
  {
    title: "Muzic Landing Page",
    image: images.muzic,
    description:
      "This is a landing page for Muzic, a music learning center owned by the family of a good friend of mine from my hometown. The design emphasises a professional and welcoming atmosphere, aimed at attracting students who are eager to explore their musical talents. With intuitive navigation and a clean layout, the landing page effectively connects aspiring musicians with valuable resources and information about the center’s offerings. The site is built with React and follows a component-based architecture.",
    technology: {
      javascript: icons.js,
      react: icons.react,
    },
    link: links.muzic,
    github: links.muzicGithub,
  },
  {
    title: "PAGRO Admin",
    image: images.pagro,
    description:
      "This web application is designed for the Provincial Agriculture Office in Malaybalay, Philippines, focusing on document processing and recording. The application streamlines workflows by providing an efficient platform for managing agricultural documents. Its user-friendly interface and robust functionality enable staff to easily record, track, and retrieve essential information, enhancing productivity and supporting the office's day to day operations. The site was built with Next.js, which simplified the development as it allowed me to handle API requests directly within the framework.",
    technology: {
      javascript: icons.js,
      nextjs: icons.nextjs,
      mongodb: icons.mongodb,
    },
    link: links.pagro,
    github: links.pagroGithub,
  },
  // {
  //   title: "Food Order App",
  //   image: images.foodorder,
  //   description: "A basic food order app with functional cart and menu.",
  //   technology: "[Javascript, React, NodeJS]",
  //   link: links.foodorder,
  // },
];

export default PORTFOLIO_LIST;
