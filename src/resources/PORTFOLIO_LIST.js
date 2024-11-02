import links from "./links";
import images from "./images";
import { icons } from "./images";

const PORTFOLIO_LIST = [
  {
    title: "Souls Fashion",
    image: images.fashion,
    description:
      "Fashion Souls: SoulsBorne fashion tool is a website by Psyopgirl. I took part in this project as a front-end developer and designer where I utilised UI/UX principles to deliver a user friendly experience. The project was built with vanilla Javascript and Python. In which, Python was used for image processing and automation. The website gets around 30,000 visits daily, highlighting it's great utility and demand.",
    technology: { javascript: icons.js, python: icons.python },
    link: links.fashion,
    github: links.fashionGithub,
  },
  {
    title: "Elden Ring Character Planner (WIP)",
    image: images.er,
    description:
      "A web application that simulates the character leveling and stat system of the video game Elden Ring.",
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
      "My personal portolio website to showcase my work history and recent projects.",
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
      "A landing page for Muzic, a music learning center based in Malaybalay, Philippines.",
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
      "A document processing and recording web application for the Provincial Agriculture Office in Malaybalay, Philippines.",
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
