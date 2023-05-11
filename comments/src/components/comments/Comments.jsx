import styles from "./comments.module.scss";
import React from "react";

export default function Comments() {
  return (
    <div className={styles.container}>
          <div className={styles.comments}></div>
          <textarea rows='5' cols='20' placeholder="Напишите что-нибудь..."></textarea>
          <div>
              <button className={styles.button}>Отправить</button>
              </div>
    </div>
  );
}
