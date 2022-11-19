import Button from "./description/button/Button";
import Picture from "./picture/picture";
import styles from "./Article.module.css";

const Article = (s) => {
  return (
    <>
      <div className={styles.container}>
        <Picture></Picture>

        <div className={styles.text}>
          <p>PERFUME</p>
          <h1 className={styles.header}>Gabrielle Essence Eu De Parfum</h1>
          <p className={styles.description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles.price}>
            <p className={styles.newprice}>$149.99</p>
            <p className={styles.oldprice}>$169.99</p>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Article;
