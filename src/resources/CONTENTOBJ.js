import { email, phone } from "./socials";

const CONTENTOBJ = {
  greeting: {
    salut: "Hello there!",
    intro: "I'm Cid",
    first:
      "I'm a web developer with an emphasis on front-end development, specifically with React.",
    second:
      "Currently, I am focused on developing a strong full-stack skill set to enhance my creative capabilities.",
    third:
      "Since 2023, I have lived in Auckland, New Zealand, where I moved to pursue a postgraduate degree in Information Technology.",
  },
  about: {
    tag: "about",
    title: "Creating modern web applications with React",
    subtitle:
      "I am primarily skilled in React, particularly within the MERN stack, but my work experience also extends to frameworks like Angular and AdonisJs. While my previous work focused on non-relational databases, I am well-versed in relational databases and prefer to use them in various side projects.",
  },
  portfolio: {
    tag: "portfolio",
  },
  contact: {
    tag: "contact",
    title: "Let's get in touch!",
    subtitle: `I’m open to any interesting opportunity, let’s get in touch! You may reach out to me through email: ${email} or phone: ${phone}.`,
  },
};

export default CONTENTOBJ;
