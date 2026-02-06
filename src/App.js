import { useEffect, useState, useRef } from "react";

import { SpeedInsights } from "@vercel/speed-insights/react";

import classes from "./App.module.css";

import PORTFOLIO_LIST from "./resources/PORTFOLIO_LIST";
import content from "./resources/CONTENTOBJ";
import { socials } from "./resources/socials";
import { icons } from "./resources/images";
import { email } from "./resources/socials";

import Navigation from "./components/Navbar/Navigation";
import ProjectPanel from "./components/ProjectPanel/ProjectPanel";
import Greeting from "./components/Greeting/Greeting";
import Section from "./components/Section/Section";
import Marquee from "./components/Marquee/Marquee";
import Panel from "./components/Panel/Panel";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const greetingSection = useRef(null);
  const aboutSection = useRef(null);
  const knowntechSection = useRef(null);
  const portfolioSection = useRef(null);
  const contactSection = useRef(null);
  const footerSection = useRef(null);

  const refs = {
    about: aboutSection,
    portfolio: portfolioSection,
    contact: contactSection,
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
      greetingSection.current,
      aboutSection.current,
      knowntechSection.current,
      portfolioSection.current,
      contactSection.current,
      footerSection.current,
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

  const excludedKeys = [
    "github",
    "vercel",
    "linkedin",
    "newtab",
    "menu",
    "close",
  ];

  const knownTechIcons = Object.entries(icons)
    .filter(([key]) => !excludedKeys.includes(key))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return (
    <>
      <Navigation refs={refs} scrollFtn={scrollToSection} />

      <main className={classes["app"]}>
        <header
          ref={greetingSection}
          className={`${classes["header"]} ${classes["fade-in"]}`}
        >
          <Greeting
            greeting={content.greeting.salut}
            socials={socials}
            email={email}
            location={location}
            intro={content.greeting.intro}
            first={content.greeting.first}
            second={content.greeting.second}
            third={content.greeting.third}
          />
        </header>

        <section
          ref={aboutSection}
          className={`${classes["about"]} ${classes["fade-in"]}`}
          aria-labelledby="about"
        >
          <Section
            id="about"
            tag={content.about.tag}
            title={content.about.title}
            subtitle={content.about.subtitle}
          />
        </section>

        <section
          ref={knowntechSection}
          className={`${classes["knowntech"]} ${classes["fade-in"]}`}
          aria-labelledby="knowntech"
        >
          <Marquee images={knownTechIcons} />
        </section>

        <section
          ref={portfolioSection}
          className={`${classes["projects"]}`}
          aria-labelledby="portfolio"
        >
          <Panel id="portfolio" tag={content.portfolio.tag}>
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
          aria-labelledby="contact"
        >
          <Section
            id="contact"
            tag={content.contact.tag}
            title={content.contact.title}
            subtitle={content.contact.subtitle}
          >
            <Contact email={email}  socials={socials} />
          </Section>
        </section>

        <footer
          ref={footerSection}
          className={`${classes["footer"]} ${classes["fade-in"]}`}
        >
          <Footer
            socials={socials}
            refs={refs}
            scrollFtn={scrollToSection}
            scrollToTop={scrollToTop}
          />
        </footer>
      </main>

      <SpeedInsights />
    </>
  );
}

export default App;
