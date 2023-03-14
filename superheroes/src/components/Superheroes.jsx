import "./Superheroes.css";

function Superheroes(props) {
  return (
    <div className="superheroes-card">
      <h1 className="superheroes-name">{props.name}</h1>
      <div className="superheroes-text">{props.universe}</div>
      <div className="superheroes-text">{props.alterego}</div>
      <div className="superheroes-text">{props.occupation}</div>
      <div className="superheroes-text">{props.friends}</div>
      <div className="superheroes-text">{props.superpowers}</div>
      <img src={props.url}></img>
      <div className="superheroes-text">{props.info}</div>
    </div>
  );
}

export default Superheroes;
