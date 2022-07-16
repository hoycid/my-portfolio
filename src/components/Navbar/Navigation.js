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
      <div className={classes.resume}>
        <a href="/CV.pdf" download>resume</a>
      </div>
    </div>
  );
};

export default Navigation;
