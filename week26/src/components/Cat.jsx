import React from "react";
import "./Cat.scss";
import cat from "../assets/images/happy.png";

//const style = { backgroundColor: "red" };

class Cat extends React.Component {
  render() {
    const { name, url, text, isSelected } = this.props;
    const classCat = isSelected ? "selected" : "";
    let className = "button";
    if (this.props.success) {
      className += "button__success";
}

    return (
      <div className={`cat-card ${classCat}`}>
        <img src={url} className="cat-card-image"></img>
        <div className="cat-name">{name}</div>
        <div className="cat-text">Замечательный ласковый котик</div>
        <div className="cat-text">{text}</div>
        <div>
          <button className={className}>Взять домой</button>
        </div>
        {isSelected && <img src={cat} className="cat-image" />}
        {!isSelected && <div>Не взяли</div>}
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

export default Cat;
