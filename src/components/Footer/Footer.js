import classes from "./Footer.module.css";

const Footer = props => {
  const socials = props.socials;
  const refs = props.refs;
  const scrollFtn = props.scrollFtn;
  const scrollToTop = props.scrollToTop;

  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.nav}>
        <div className={classes.links}>
          {Object.entries(refs)
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
      <div className={classes.copyright}>
        <button onClick={scrollToTop} className={classes.scrollTo}>
          back to top
        </button>
        <p>© {currentYear} Cidrex Quilang. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
