import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes.logo}>
        <a>{"</devqui>"}</a>
      </div>
      <div className={classes.menu}>
        <a>about</a>
        <a>contact</a>
      </div>
      <div className={classes.resume}>
        <a>resume</a>
      </div>
    </div>
  );
};

export default Navigation;
