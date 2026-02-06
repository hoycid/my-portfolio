import classes from "./Greeting.module.css";

const Greeting = props => {
  const greeting = props.greeting;
  const intro = props.intro;
  const first = props.first;
  const second = props.second;
  const third = props.third;
  const socials = props.socials;
  const email = props.email;
  const location = props.location;

  return (
    <div className={classes["greeting"]}>
      <h2>{greeting}</h2>
      <h1>{intro}</h1>
      <div className={classes.socials}>
        <p className={classes.social}>{email}</p>
        <p className={classes.social}>{location}</p>
        {Object.entries(socials)
          .reverse()
          .map(([key, social]) => (
            <a
              className={classes.social}
              key={key}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.icon}
                src={social.icon}
                alt={social.title}
              />
              <label>{social.title}</label>
            </a>
          ))}
      </div>
      <div className={classes["subheader"]}>
        <p className={classes["first"]}>{first}</p>
        <p className={classes["second"]}>{second}</p>
        <p className={classes["third"]}>{third}</p>
      </div>
    </div>
  );
};

export default Greeting;
