import styles from "./rates.module.scss";
import React, { useState } from "react";

export default function Rates(props) {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className={styles.card} onClick={handleChange}>
      {pressed ? (
        <div className={styles.selected}>{props.name}</div>
      ) : (
        <div className={styles.name}>{props.name}</div>
      )}
      <div className={styles.block_price}>
        <div className={styles.textprice}>руб</div>
        <div className={styles.price}> {props.price} </div>
        <div className={styles.textmounth}>/мес</div>
      </div>
      <div className={styles.text}>{props.speed} </div>
      <div className={styles.footer}>
        Объем включенного трафика не ограничен
      </div>
    </div>
  );
}

// function Rates(props) {
//   const classRates = props.isSelected ? styles.selected : styles.name;

//   return (
//     <div className={styles.card}>
//       <div className={classRates}>{props.name}</div>
//       <div className={styles.block_price}>
//         <div className={styles.textprice}>руб</div>
//         <div className={styles.price}> {props.price} </div>
//         <div className={styles.textmounth}>/мес</div>
//       </div>
//       <div className={styles.text}>{props.speed} </div>
//       <div className={styles.footer}>
//         Объем включенного трафика не ограничен
//       </div>
//     </div>
//   );
// }
//export default Rates;
