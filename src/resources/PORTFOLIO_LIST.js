import links from "./links";
import images from "./images";
import { icons } from "./images";

const PORTFOLIO_LIST = [
  {
    title: "Bitcoin Spiral",
    image: images.btcspiral,
    description:
      "This project is a simple yet engaging visualization of the Bitcoin cycle, which operates on a 4-year pattern. A dynamic bar moves around a Bitcoin graphic, gradually progressing each day toward the end of the cycle. Once it reaches the last year, the cycle resets, offering a clear and intuitive representation of Bitcoin’s recurring cycle. The project displays key details, including the current BTC price, percentage increase, and days remaining until the end of the cycle. It pulls real-time data for the cycle dates from an API, while also integrating live market information through widgets from CoinGecko’s API.",
    technology: {
      javascript: icons.javascript,
      react: icons.react,
    },
    link: links.btcspiral,
    github: links.btcspiral,
  },
  {
    title: "Fashion Souls",
    image: images.fashion,
    description:
      "Fashion Souls is an interactive fashion tool for the SoulsBorne community, developed by Psyopgirl. As a contributing front-end developer and designer, I developed a UI overhaul for the site with a focus on instinctive user experience and UI/UX principles. The project utilized vanilla JavaScript for the interface, while Python managed image and file processing on the back end. On top of contributing further bugfixes, the creator and I are currently working on further developments, with features such as an outfit system on the way. The site has received a fantastic response, averaging about 30,000 visits daily, which speaks volumes about its utility and popularity among fans.",
    technology: { javascript: icons.javascript, python: icons.python },
    link: links.fashion,
    github: links.fashionGithub,
  },
  {
    title: "Elden Ring Character Planner",
    image: images.er,
    description:
      "This web application simulates the character leveling and stat system of the popular video game Elden Ring, allowing players to strategize and optimize their builds in a user-friendly environment. Users can experiment with different character attributes and see how each choice impacts gameplay, making it an invaluable tool for both new and seasoned players aiming to maximize their potential in both PvE and PvP. Built with React, the application follows a component-based architecture. Data is fetched from two APIs: one for storing character presets and another for populating item data. The first API was built with Express.js as middleware for a Node.js server, deployed on Railway.app. The second API is an open-source API developed by Delition.",
    technology: {
      javascript: icons.javascript,
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
      javascript: icons.javascript,
      react: icons.react,
    },
    link: links.portfolio,
    github: links.portfolioGithub,
  },
  {
    title: "Muzic Landing Page",
    image: images.muzic,
    description:
      "This is a landing page for Muzic, a music learning centre owned by the family of a good friend of mine from my hometown. The design emphasises a professional and welcoming atmosphere, aimed at attracting students who are eager to explore their musical talents. With intuitive navigation and a clean layout, the landing page effectively connects aspiring musicians with valuable resources and information about the centre's offerings. The site is built with React and follows a component-based architecture.",
    technology: {
      javascript: icons.javascript,
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
      javascript: icons.javascript,
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
