import { useEffect, useState, useRef } from "react";

import classes from "./App.module.css";

import Navigation from "./components/Navbar/Navigation";

import PORTFOLIO_LIST from "./resources/PORTFOLIO_LIST";

import { socials } from "./resources/socials";

function App() {
  const projectsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);

  const refs = {
    projectsSection: projectsSection,
    aboutSection: aboutSection,
    contactSection: contactSection,
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    setProjects(PORTFOLIO_LIST);
  }, []);

  const mailHandler = () => {
    window.open(`mailto:${socials.email}?`);
  };

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

  const navigateProjects = type => {
    if (type === "next" && currentProjectIndex < projects.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
    if (type === "prev" && currentProjectIndex !== 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  const jumpToProject = index => {
    setCurrentProjectIndex(index);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navigation scrollFtn={scrollToSection} refs={refs} />
      <div className={classes.App}>
        <header>
          <div className={classes["greeting"]}>
            <p>Hello there!</p>
            <h1>I'm Cid</h1>
            <h3>I make web apps.</h3>
          </div>
          <div className={classes["greeting-scrolldown"]}>
            <button
              onClick={() => scrollToSection(projectsSection)}
              className={classes.scrollTo}
            >
              scroll down
            </button>
          </div>
        </header>
        <div className={classes.details}>
          <section className={classes.projects} ref={projectsSection}>
            <h3>{"my projects"}</h3>
            <div className={classes.content}>
              <div className={classes["projects-viewer"]}>
                <div className={classes["projects-list"]}>
                  <ul>
                    {projects.map((item, index) => (
                      <li
                        className={
                          index === currentProjectIndex
                            ? classes["li--active"]
                            : ""
                        }
                        key={index}
                        onClick={() => jumpToProject(index)}
                      >
                        {index + 1}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classes["project-preview"]}>
                  <div className={classes["project-navigator"]}>
                    <span>
                      <button
                        onClick={() => navigateProjects("prev")}
                      >{`<`}</button>
                    </span>
                    <a
                      href={projects[currentProjectIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={projects[currentProjectIndex].image}
                        alt={projects[currentProjectIndex].title}
                      />
                    </a>

                    <span>
                      <button
                        onClick={() => navigateProjects("next")}
                      >{`>`}</button>
                    </span>
                  </div>
                  <div className={classes["project-description"]}>
                    <h2>{projects[currentProjectIndex].title || ""}</h2>
                    <p>{projects[currentProjectIndex].description || ""}</p>
                    <p className={classes.highlight}>
                      {projects[currentProjectIndex].technology ||
                        "Not applicable"}
                    </p>
                    <a
                      href={projects[currentProjectIndex].link || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projects[currentProjectIndex].link || ""}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={classes.about} ref={aboutSection}>
            <h3>{"about me"}</h3>
            <div className={classes.content}>
              <p>
                I am a web developer aiming to build a solid full stack
                skillset to empower my ability to create. 
              </p>
              <p className={classes.highlight}>
                As an internet native, I extract and learn information in a
                quick pace using the internet and recently, with AI.
              </p>
              <p>
                I am most familiar with the MERN stack but I also have experience with
                other web development frameworks such as Angular and AdonisJs, as well as CMS's
                such as Wordpress and Shopify.
              </p>
            </div>
          </section>
          <section className={classes["work-history"]}>
            <h3>{"my work history"}</h3>
            <div className={classes.content}>
            <h4>2022</h4>
              <div className={classes.content}>
                <ul>
                  <li>Administrative Aide I | Provincial Government of Bukidnon | Philippines</li>
                </ul>
              </div>
              <h4>2020</h4>
              <h4>2020</h4>
              <div className={classes.content}>
                <ul>
                  <li>Web developer | CresCode | Philippines</li>
                </ul>
              </div>
              <h4>2019</h4>
            </div>
          </section>
          <section className={classes.education}>
            <h3>{"my education"}</h3>
            <div className={classes.content}>
            <h4>Present</h4>
              <div className={classes.content}>
                <ul>
                  <li>
                    Postgraduate Diploma in Information Technology | Te Pūkenga
                    Eastern Institute of Technology | Auckland, NZ
                  </li>
                </ul>
              </div>
              <h4>2023</h4>
              <h4>2019</h4>
              <div className={classes.content}>
                <ul>
                  <li>
                    Bachelor of Science in Information Technology | Bukidnon
                    State University | Malaybalay, PH
                  </li>
                </ul>
              </div>
              <h4>2016</h4>
              {/* <p>Completed courses such as:</p>
              <div className={classes.content}>
                <ul>
                  <li>
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                  </li>
                  <li>NextJS - The Complete Guide</li>
                </ul>
              </div> */}
            </div>

          </section>
          <section className={classes["additional-skills"]}>
            <h3>{"my other skills"}</h3>
            <div className={classes.content}>
              <ul>
                <li>Version control tools (Git and GitHub)</li>
                <li>Project management tools (Trello)</li>
              </ul>
            </div>
          </section>
          <section className={classes.contact} ref={contactSection}>
            <div className={classes["contact-header"]}>Contact</div>
            <p>I’m open to any interesting opportunity, let’s get in touch!</p>
            <button onClick={mailHandler}>email</button>
          </section>
        </div>
        <footer>
          <button onClick={scrollToTop} className={classes.scrollTo}>
            back to top
          </button>
          <p>{currentYear} | Cidrex Quilang</p>
        </footer>
      </div>
    </>
  );
}

export default App;
