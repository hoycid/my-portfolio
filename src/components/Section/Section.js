import classes from "./Section.module.css";

const Section = props => {
  const ref = props.ref;
  const children = props.children;
  const tag = props.tag;
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.tag}>
        <p>{tag}</p>
      </div>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.subtitle}>
        <p>{subtitle}</p>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
