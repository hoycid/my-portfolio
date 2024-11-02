import classes from "./Contact.module.css";

const Contact = props => {
  const socials = props.socials;
  const mailHandler = email => {
    window.open(`mailto:${email}?`);
  };

  return (
    <div className={classes.container}>
      <button onClick={mailHandler}>Send an email</button>
      <p>or</p>
      <h2>Message me on any of my socials</h2>
      <div className={classes.socials}>
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
    </div>
  );
};

export default Contact;
