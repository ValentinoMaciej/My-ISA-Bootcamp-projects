import { useState } from "react";
import { Answers } from "../Answers/Answers";
import Image from "../Image/Image";
import TitleToMap from "../Answers/TitleToMap/TitleToMap";
import styles from "./Container.module.css";

function Container() {
  const [faqQuestion] = useState(Answers);
  return (
    <div className={styles.container}>
      <article>
        <Image />
      </article>
      <article>
        <h1 className={styles.faqHeader}>FAQ</h1>
        {faqQuestion.map((asking, index) => (
          <TitleToMap
            key={index}
            title={asking.title}
            description={asking.description}
          />
        ))}
      </article>
    </div>
  );
}

export default Container;
