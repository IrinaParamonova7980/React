import styles from "./rates.module.scss";

function Rates(props) {
  const classRates = props.isSelected ? styles.selected : styles.name;

  return (
    <div className={styles.card}>
      <div className={`${classRates} ${props.theme.name}`}>{props.name}</div>
      <div className={`${styles.block_price} ${props.theme.block_price}`}>
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

export default Rates;
