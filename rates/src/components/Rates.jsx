import styles from "./rates.module.scss";

function Rates(props) {
  const classRates = props.isSelected ? "styles.rates_card__selected" : "";

  return (
    <div className={`styles.rates_card ${classRates}`}>
      <div className={styles.rates_name}>{props.name}</div>
      <div className={styles.text}>руб</div>
      <div className={styles.price}> {props.price} </div>
      <div className={styles.text}>/мес</div>
      <div className={styles.text}>{props.speed} </div>
      <div className={styles.text}>Объем включенного трафика не ограничен</div>
    </div>
  );
}

export default Rates;
