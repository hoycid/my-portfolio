import classes from "./Marquee.module.css";

const Marquee = props => {
  const images = props.images;

  return (
    <div className={classes.marquee}>
      {Object.entries(images).map(([key, src], index) => {
        return <img key={index} src={src} alt={key} />;
      })}
      {Object.entries(images).map(([key, src], index) => {
        return <img key={index} src={src} alt={key} />;
      })}
      {Object.entries(images).map(([key, src], index) => {
        return <img key={index} src={src} alt={key} />;
      })}
    </div>
  );
};

export default Marquee;
