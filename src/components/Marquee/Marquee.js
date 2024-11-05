import classes from "./Marquee.module.css";

const Marquee = props => {
  const images = props.images;

  return (
    <div className={classes.marquee}>
      {Object.entries(images).map(([key, src], index) => {
        return (
          <div key={index} className={classes.item}>
            <img src={src} alt={key} />
            <label>{key}</label>
          </div>
        );
      })}
      {Object.entries(images).map(([key, src], index) => {
        return (
          <div key={index} className={classes.item}>
            <img src={src} alt={key} />
            <label>{key}</label>
          </div>
        );
      })}
      {Object.entries(images).map(([key, src], index) => {
        return (
          <div key={index} className={classes.item}>
            <img src={src} alt={key} />
            <label>{key}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Marquee;
