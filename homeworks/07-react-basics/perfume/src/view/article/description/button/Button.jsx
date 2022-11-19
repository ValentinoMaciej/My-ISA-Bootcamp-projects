import styles from "./Button.module.css";
import icon from "./icon-cart.svg";
function Button() {
  return (
    <button className={styles.button}>
      <img src={icon}></img>
      Add to Cart
    </button>
  );
}

//

export default Button;
