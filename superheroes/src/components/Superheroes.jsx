import "./Superheroes.css";

function Superheroes(props) {
  return (
    <div className="superheroes-card">
      <h1 className="superheroes-name">{props.name}</h1>
      <div className="text">
        <span className="bold-text">Вселенная: </span>
        {props.universe}
      </div>
      <div className="text">
        <span className="bold-text">Альтер эго: </span>
        {props.alterego}
      </div>
      <div className="text">
        <span className="bold-text">Род деятельности: </span>
        {props.occupation}
      </div>
      <div className="text">
        <span className="bold-text">Друзья: </span>
        {props.friends}
      </div>
      <div className="text">
        <span className="bold-text">Суперсилы: </span>
        {props.superpowers}
      </div>
      <img src={props.url} className="image"></img>
      <div className="text">
        <span className="bold-text">Подробнее: </span>
        {props.info}
      </div>
    </div>
  );
}

export default Superheroes;
