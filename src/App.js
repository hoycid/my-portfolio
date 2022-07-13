import { useState } from "react";

import classes from "./App.module.css";

import Navigation from "./components/Navbar/Navigation";

import foodorder from "./assets/images/Screenshot 2022-07-13 095101.png";
import portfolio from "./assets/images/Screenshot 2022-07-13 135147.png";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Food Order App",
      image: foodorder,
      description: "A basic food order app with functional cart and menu.",
      technology: "[Javascript, React, NodeJS]",
      link: "www.foodorder.com",
    },
    {
      title: "Portfolio website",
      image: portfolio,
      description:
        "My personal portolio website to showcase my work history and recent projects.",
      technology: "[Javascript, React, NodeJS]",
      link: "www.devqui.io",
    },
  ]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const navigateProj = type => {
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

  return (
    <>
      <Navigation />
      <div className={classes.App}>
        <div className={classes["job-title"]}>
          <h1 className={classes["job-title-2"]}>front-end</h1> developer
        </div>
        <div className={classes.details}>
          <div className={classes.about}>
            <h3>{"<about>"}</h3>
            <div className={classes.content}>
              <p>
                Working as a front end developer, I collaborated with a team to
                develop a top-up website for a telecommunications company based
                in Rome, Italy. I am working towards building a solid full stack
                skillset to empower my ability to create.
              </p>
              <p className={classes.highlight}>
                "To learn is not to know; there are the learners and the
                learned. Memory makes the one, philosophy the others."
              </p>
              <p>
                As an internet native, I extract and learn information in a
                quick pace. I often indulge in the various aspects of the web
                and contribute in its many communities. Coding knowledge is good
                but the ability to collaborate and contribute is what holds this
                world together.
              </p>
            </div>
            <h3>{"</about>"}</h3>
          </div>
          <div className={classes.projects}>
            <h3>{"<projects>"}</h3>
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
                        onClick={() => navigateProj("prev")}
                      >{`<`}</button>
                    </span>
                    <img
                      src={projects[currentProjectIndex].image}
                      alt={projects[currentProjectIndex].title}
                    />
                    <span>
                      <button
                        onClick={() => navigateProj("next")}
                      >{`>`}</button>
                    </span>
                  </div>
                  <div className={classes["project-description"]}>
                    <span>
                      <h2>{projects[currentProjectIndex].title}</h2>
                      <p>{projects[currentProjectIndex].description}</p>
                      <p className={classes.highlight}>
                        {projects[currentProjectIndex].technology}
                      </p>
                      <a href={projects[currentProjectIndex].link}>
                        {projects[currentProjectIndex].link}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3>{"</projects>"}</h3>
          </div>
          <div className={classes["work-history"]}>
            <h3>{"<work history>"}</h3>
            <div className={classes.content}>
              <h4>2020</h4>
              <div className={classes.content}>
                <ul>
                  <li>Front-end developer | CresCode | Manila, Philippines</li>
                </ul>
              </div>
              <h4>2019</h4>
            </div>
            <h3>{"</work history>"}</h3>
          </div>
          <div className={classes.education}>
            <h3>{"<education>"}</h3>
            <div className={classes.content}>
              <p>
                <h4>2019</h4>
                <div className={classes.content}>
                  <ul>
                    <li>
                      Bachelor of Science in Information Technology | Bukidnon
                      State University
                    </li>
                  </ul>
                </div>
                <h4>2016</h4>
              </p>
              <p>Completed courses such as:</p>
              <div className={classes.content}>
                <ul>
                  <li>
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                  </li>
                  <li>NextJS - The Complete Guide</li>
                </ul>
              </div>
            </div>

            <h3>{"</education>"}</h3>
          </div>
          <div className={classes["additional-skills"]}>
            <h3>{"<additional skills>"}</h3>
            <div className={classes.content}>
              <ul>
                <li>Git and GitHub</li>
                <li>Project management tools (Trello)</li>
              </ul>
            </div>
            <h3>{"</additional skills>"}</h3>
          </div>
          <div className={classes.contact}>
            <div className={classes["contact-header"]}>Connect</div>
            <p>I’m open to any interesting opportunity, let’s get in touch!</p>
            <button>email</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
