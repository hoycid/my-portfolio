import { email, phone } from "./socials";

const CONTENTOBJ = {
  greeting: {
    salut: "Hello there!",
    intro: "I'm Cid",
    first:
      "Background in web development, with hands-on experience in front-end work using modern frameworks and libraries.",
    second:
      "Experience building low-code solutions with Microsoft Power Apps and Power Automate to streamline workflows and support business processes.",
    third:
      "Experience in handling day-to-day technical support, resolving hardware, software, and network issues to support users and business operations.",
  },
  about: {
    tag: "about",
    title: "Creating modern web applications and business solutions",
    subtitle:
      "I build practical digital solutions by combining web app development, process automation, and technical support. My toolkit includes web technologies such as React and related frameworks like Next.js. I work with both non-relational and relational databases, including MongoDB, MySQL, and SQLite. Alongside web development, I design low-code solutions using Microsoft Power Apps and Power Automate to automate workflows, streamline internal processes, and deliver efficient business tools. I also troubleshoot hardware, software, and network issues, helping maintain reliable systems and ensuring technology supports day-to-day operations effectively.",
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
