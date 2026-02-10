import { email, phone } from "./socials";

const CONTENTOBJ = {
  greeting: {
    salut: "Hello there!",
    intro: "I'm Cid",
    first:
      "Background in web development, with hands-on experience in front-end work using modern frameworks and libraries.",
    second:
      "Experienced in building low-code solutions using Microsoft Power Apps and Power Automate to automate workflows, streamline processes, and support business operations.",
    third:
      "Experience in handling day-to-day technical support, resolving hardware, software, and network issues to support users and business operations.",
  },
  about: {
    tag: "about",
    title: "Building efficient automation solutions to reduce manual workload.",
    subtitle:
      "I build practical digital solutions by combining process automation and web application development. My toolkit includes web technologies like React and Next.js, and I work with both relational and non-relational databases such as MySQL, SQLite, and MongoDB. I design low-code solutions using Microsoft Power Apps and Power Automate to automate workflows, streamline processes, and deliver efficient business tools.",
  },
  portfolio: {
    tag: "projects",
  },
  contact: {
    tag: "contact",
    title: "Let's get in touch!",
    subtitle: `I’m open to any interesting opportunity, let’s get in touch! You may reach out to me through email: ${email} or phone: ${phone}.`,
  },
};

export default CONTENTOBJ;
