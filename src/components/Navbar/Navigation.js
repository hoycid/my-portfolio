import classes from "./Navigation.module.css";

import links from "../../resources/links";

const Navigation = props => {
  return (
    <div className={classes.navigation}>
      <div className={classes.logo}>
        <a href={links.portfolio}>{"</devqui>"}</a>
      </div>
      <div className={classes.menu}>
        <button
          onClick={() => {
            props.scrollFtn(props.refs.projectsSection);
          }}
        >
          projects
        </button>
        <button
          onClick={() => {
            props.scrollFtn(props.refs.aboutSection);
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            props.scrollFtn(props.refs.contactSection);
          }}
        >
          contact
        </button>
      </div>
      <a className={classes.resume} href="/CV.pdf">
        resume
      </a>
    </div>
  );
};

export default Navigation;
