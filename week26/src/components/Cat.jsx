import React from "react";
import "./Cat.scss";

//const style = { backgroundColor: "red" };

class Cat extends React.Component {
  render() {
    const { name, url, text } = this.props;
    return (
      <div className="cat-card">
        <img src={url}></img>
        <div className="cat-name">{name}</div>
        <div className="cat-text">Замечательный ласковый котик</div>
        <div className="cat-text">{text}</div>
        <button className="button">Взять домой</button>
      </div>
    );
  }
}

// function Cat(props) {
//   return (
//     <div className="cat-card">
//       <img src={props.url}></img>
//       <div className="cat-name">{props.name}</div>
//       <div className="cat-text">Замечательный ласковый котик</div>
//       <div className="cat-text">{props.text}</div>
//       <button>Взять домой</button>
//     </div>
//   );
// }

// export default Cat;

export default Cat;
