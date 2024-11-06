import { useEffect, useRef } from "react";
import classes from "./ProjectPanel.module.css";
import { icons } from "../../resources/images";

const ProjectPanel = props => {
  const imageLink = props.image || "";
  const title = props.title || "";
  const description = props.description || "";
  const tech = props.tech || [];
  const github = props.github || "";
  const liveLink = props.link || "";

  const panelRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes["fade-in-visible"]);
          entry.target.classList.remove(classes["fade-out-visible"]); // Remove fade-out class
        } else {
          entry.target.classList.add(classes["fade-out-visible"]); // Add fade-out class
          entry.target.classList.remove(classes["fade-in-visible"]); // Remove fade-in class
        }
      });
    }, observerOptions);

    const currentPanel = panelRef.current;

    if (currentPanel) observer.observe(currentPanel);

    return () => {
      if (currentPanel) observer.unobserve(currentPanel); // Clean up
    };
  }, []);

  return (
    <div className={classes["container"]} ref={panelRef}>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img className={classes["image"]} src={imageLink} alt={title} />
      </a>
      <div className={classes["title"]}>
        <h3>{title}</h3>
      </div>
      <div className={classes["desc"]}>
        <p>{description}</p>
      </div>
      <div className={classes["tech-used"]}>
        {Object.entries(tech).map(([key, image]) => (
          <div className={classes["tech"]} key={key}>
            <img className={classes.icon} src={image} alt={key} />
            <label>{key}</label>
          </div>
        ))}
      </div>
      <div className={classes["links"]}>
        <a
          id="github"
          className={classes.link}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.icon} src={icons.github} alt="github" />
          <label>Source</label>
        </a>
        <a
          id="live"
          className={classes.link}
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.icon} src={icons.newtab} alt="live" />
          <label>Live</label>
        </a>
      </div>
    </div>
  );
};

export default ProjectPanel;
