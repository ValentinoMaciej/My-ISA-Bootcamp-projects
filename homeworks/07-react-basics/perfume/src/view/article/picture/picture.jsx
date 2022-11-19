import picture from "./image-product-desktop.jpg";
import styles from "./picture.module.css";

function Picture() {
  return <img src={picture} alt={"parfume"} className={styles.image} />;
}

export default Picture;
