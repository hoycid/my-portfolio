import links from "./links";
import images from "./images";

const PORTFOLIO_LIST = [
  // {
  //   title: "Elden Ring Character Planner",
  //   image: images.portfolio,
  //   description:
  //     "A web application that simulates the character leveling and stat system of the video game Elden Ring.",
  //   technology: "[Javascript, React, NodeJs, SQLite]",
  //   link: links.er,
  // },
  {
    title: "PAGRO Admin",
    image: images.pagro,
    description:
      "A document processing and recording web application for the Provincial Agriculture Office in Malaybalay, Philippines.",
    technology: "[Javascript, NextJS, MongoDB]",
    link: links.pagro,
  },
  {
    title: "Muzic Landing Page",
    image: images.muzic,
    description:
      "A landing page for Muzic, a music learning center based in Malaybalay, Philippines.",
    technology: "[Javascript, React]",
    link: links.muzic,
  },
  {
    title: "Portfolio website",
    image: images.portfolio,
    description:
      "My personal portolio website to showcase my work history and recent projects.",
    technology: "[Javascript, React]",
    link: links.portfolio,
  },
  {
    title: "Food Order App",
    image: images.foodorder,
    description: "A basic food order app with functional cart and menu.",
    technology: "[Javascript, React, NodeJS]",
    link: links.foodorder,
  },
];

export default PORTFOLIO_LIST;
