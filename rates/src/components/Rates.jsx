import "./Rates.scss";

function Rates(props) {
  return (
    <div className="rates-card">
      <div className="rates-name">{props.name}</div>
      <div className="text">руб</div>
      <div className="price"> {props.price} </div>
      <div className="text">/мес</div>
      <div className="text">{props.speed} </div>
      <div className="text">Объем включенного трафика не ограничен</div>
    </div>
  );
}

export default Rates;
