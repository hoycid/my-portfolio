import classes from "./Greeting.module.css";

const Greeting = props => {
  const greeting = props.greeting;
  const intro = props.intro;
  const first = props.first;
  const second = props.second;
  const third = props.third;

  return (
    <header className={classes["greeting"]}>
      <h2>{greeting}</h2>
      <h1>{intro}</h1>
      <div className={classes["subheader"]}>
        <p className={classes["first"]}>
          {first}
        </p>
        <p className={classes["second"]}>
          {second}
        </p>
        <p className={classes["third"]}>
          {third}
        </p>
      </div>
    </header>
  );
};

export default Greeting;
