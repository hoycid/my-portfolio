import classes from "./Panel.module.css";

const Panel = props => {
  const ref = props.ref;
  const children = props.children;
  const tag = props.tag;

  return (
    <div className={classes.container} ref={ref}>
      <p className={classes.tag}>{tag}</p>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Panel;
