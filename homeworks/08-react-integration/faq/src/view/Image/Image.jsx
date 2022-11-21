import desktopImage from "./illustration-woman-online-mobile.svg";
import styles from "./Image.module.css";

function Image() {
  return (
    <img
      src={desktopImage}
      alt="Girl in front of screen"
      className={styles.MainImage}
    />
  );
}

export default Image;
