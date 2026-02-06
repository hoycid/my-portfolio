import { email, phone } from "./socials";

const CONTENTOBJ = {
  greeting: {
    salut: "Hello there!",
    intro: "I'm Cid",
    first:
      "Web development background with an emphasis on front-end development using modern web frameworks and libaries.",
    second:
      "Skilled in building low-code applications using Power Apps and PowerAutomate.",
    third:
      "Skilled in troubleshooting hardware, software, and network issues to ensure system reliability.",
  },
  about: {
    tag: "about",
    title: "Creating modern web applications and business solutions",
    subtitle:
      "I build practical digital solutions by combining web app development, process automation, and technical support. My toolkit includes web technologies such as React and related frameworks like Next.js. I work with both non-relational and relational databases, including MongoDB, MySQL, and SQLite. Alongside custom development, I design low-code solutions using Microsoft Power Apps and Power Automate to automate workflows, streamline internal processes, and deliver efficient business tools. I also troubleshoot hardware, software, and network issues, helping maintain reliable systems and ensuring technology supports day-to-day operations effectively.",
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
