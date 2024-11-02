import { useEffect, useState, useRef } from "react";

import classes from "./App.module.css";

import Navigation from "./components/Navbar/Navigation";
import ProjectPanel from "./components/ProjectPanel/ProjectPanel";

import PORTFOLIO_LIST from "./resources/PORTFOLIO_LIST";
import { socials } from "./resources/socials";
import { icons } from "./resources/images";
import { email } from "./resources/socials";

import Greeting from "./components/Greeting/Greeting";
import Section from "./components/Section/Section";
import Marquee from "./components/Marquee/Marquee";
import Panel from "./components/Panel/Panel";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const portfolioSection = useRef(null);
  const aboutSection = useRef(null);
  const knowntechSection = useRef(null);
  const contactSection = useRef(null);

  const refs = {
    contact: contactSection,
    portfolio: portfolioSection,
    about: aboutSection,
  };

  const [projects, setProjects] = useState([
    {
      title: "",
      image: "",
      description: "",
      technology: "",
      link: "",
    },
  ]);

  useEffect(() => {
    setProjects(PORTFOLIO_LIST);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = ref => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes["fade-in-visible"]);
        } else {
          entry.target.classList.remove(classes["fade-in-visible"]);
        }
      });
    }, observerOptions);

    const sections = [
      aboutSection.current,
      knowntechSection.current,
      portfolioSection.current,
      contactSection.current,
    ];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const content = {
    greeting: {
      salut: "Hello there!",
      intro: "I'm Cid",
      first:
        "I'm a dedicated web developer with a passion for creating modern and functional web applications.",
      second:
        "Currently, I am focused on developing a strong full-stack skill set to enhance my creative capabilities.",
      third:
        "Since 2023, I have lived in Auckland, New Zealand, where I moved to pursue a postgraduate degree in Information Technology.",
    },
    about: {
      tag: "about",
      title: "Creating modern and functional web applications",
      subtitle:
        "I am primarily skilled in the MERN stack, but I also have experience with other web development frameworks like Angular and AdonisJs. Additionally, I've worked with CMS platforms such as WordPress and Shopify, as well as relational databases like MySQL and SQLite. As a digital native, I can quickly gather and learn information online and recently, I've been utilizing AI to achieve the same purpose in an even faster pace.",
    },
    portfolio: {
      tag: "portfolio",
    },
    contact: {
      tag: "contact",
      title: "Let's get in touch!",
      subtitle: "I’m open to any interesting opportunity, let’s get in touch!",
    },
  };

  const knownTechIcons = Object.entries(icons)
    .filter(
      ([key]) =>
        key !== "github" &&
        key !== "vercel" &&
        key !== "linkedin" &&
        key !== "newtab"
    )
    .map(([, value]) => value);

  return (
    <>
      <Navigation refs={refs} scrollFtn={scrollToSection} />

      <div className={classes["app"]}>
        <Greeting
          greeting={content.greeting.salut}
          intro={content.greeting.intro}
          first={content.greeting.first}
          second={content.greeting.second}
          third={content.greeting.third}
        />

        <section
          ref={aboutSection}
          className={`${classes["about"]} ${classes["fade-in"]}`}
        >
          <Section
            tag={content.about.tag}
            title={content.about.title}
            subtitle={content.about.subtitle}
          />
        </section>

        <section
          ref={knowntechSection}
          className={`${classes["knowntech"]} ${classes["fade-in"]}`}
        >
          <Marquee images={knownTechIcons} />
        </section>

        <section
          ref={portfolioSection}
          className={`${classes["projects"]} ${classes["fade-in"]}`}
        >
          <Panel tag={content.portfolio.tag}>
            {projects.map((project, index) => (
              <ProjectPanel
                key={index}
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.technology}
                github={project.github}
                link={project.link}
              />
            ))}
          </Panel>
        </section>

        <section
          ref={contactSection}
          className={`${classes["contact"]} ${classes["fade-in"]}`}
        >
          <Section
            tag={content.contact.tag}
            title={content.contact.title}
            subtitle={content.contact.subtitle}
          >
            <Contact email={email} socials={socials} />
          </Section>
        </section>

        <Footer
          socials={socials}
          refs={refs}
          scrollFtn={scrollToSection}
          scrollToTop={scrollToTop}
        />
      </div>
    </>
  );
}

export default App;
