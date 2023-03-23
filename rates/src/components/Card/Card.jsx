import React from "react";

const card = {
  title: "Зимние ботинки",
  price: 99,
  description: "Такие только у нас",
  imgLink: "https://cs13.pikabu.ru/avatars/3128/x3128007-1508104989.png",
};

function AddToCartButton() {
  return <button className="card-add">Заказать</button>;
}

function AddToCartForm(props) {
  return (
    <form>
      <button className="card-form__del">-</button>
      <input className="card-form__input" value={props.addedToCart} />
      <button className="card-form__add">+</button>
    </form>
  );
}

export default class Card extends React.Component {
  render() {
    const { title, price, description, imgLink, addedToCart } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <img src={card.imgLink} alt={card.title} />
          <h4 className="card-title">{card.title}</h4>
          <p className="card-text">{card.description}</p>
        </div>
        <div className="card-footer">
          <span className="card-price">${card.price}</span>
          {addedToCart ? (
            <AddToCartForm addedToCart={card.addedToCart} />
          ) : (
            <AddToCartButton />
          )}
        </div>
      </div>
    );
  }
}
