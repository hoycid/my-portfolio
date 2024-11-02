import classes from "./Navigation.module.css";

import links from "../../resources/links";

import { icons } from "../../resources/images";

import { useState, useEffect } from "react";

const Navigation = props => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const refs = props.refs;
  const scrollFtn = props.scrollFtn;

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarVisible]);

  return (
    <header className={classes.navigation}>
      <div className={classes.logo}>
        <a href={links.portfolio}>{"cidrex quilang"}</a>
      </div>
      <div className={classes.menu}>
        {Object.entries(refs)
          .reverse()
          .map(([name, ref], key) => (
            <button
              className={classes.link}
              key={key}
              onClick={() => {
                scrollFtn(ref);
              }}
            >
              {name}
            </button>
          ))}
      </div>
      <button className={classes[`menu-button`]} onClick={toggleSidebar}>
        <img className={classes.icon} src={icons.menu} alt="menu"/>
      </button>

      <div
        className={`${classes.sidebar} ${
          isSidebarVisible ? classes.active : classes.hidden
        }`}
      >
        <button
          className={
            isSidebarVisible ? classes[`close-button`] : classes.hidden
          }
          onClick={toggleSidebar}
        >
          <img className={classes.icon} src={icons.close} alt="close"/>
        </button>
        <div
          className={
            isSidebarVisible ? classes[`sidebar-content`] : classes.hidden
          }
        >
          {Object.entries(refs)
            .reverse()
            .map(([name, ref], key) => (
              <button
                className={classes.link}
                key={key}
                onClick={() => {
                  scrollFtn(ref);
                  toggleSidebar();
                }}
              >
                {name}
              </button>
            ))}
          <a
            className={classes[`sidebar-content`]}
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      </div>

      <a className={classes.resume} href="/CV.pdf">
        resume
      </a>
    </header>
  );
};

export default Navigation;
