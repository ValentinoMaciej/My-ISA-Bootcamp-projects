import { useState } from "react";
import styles from "./TitleToMap.module.css";
import Icon from "../../Icon/Icon";
import IconUp from "../../IconUp/IconUp";

function TitleToMap({ title, description }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <article
          onClick={() => setShow(!show)}
          className={styles.TitleToMapArticle}
        >
          <h2 className={styles.titles}>{title}</h2>
          {show ? <IconUp /> : <Icon />}
        </article>
        {show && <p className={styles.description}>{description}</p>}
      </div>
    </>
  );
}

export default TitleToMap;
