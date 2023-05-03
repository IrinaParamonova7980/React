import React from "react";
import ItemCard from "../itemCard/ItemCard";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: 0 };
  }

  addToCart = () => {
    this.setState({
      itemsInCart: this.state.itemsInCart + 1,
    });
  };

  render() {
    return (
      <>
        <p>В корзине {this.state.itemsInCart} вещей</p>
        <div style={{ display: "flex" }}>
          <ItemCard
            title="Котик сидит"
            price="300"
            imgLink="https://cs13.pikabu.ru/avatars/3128/x3128007-1508104989.png"
            addToCart={this.addToCart}
          ></ItemCard>
          <ItemCard
            title="Котик лежит"
            price="40"
            imgLink="https://cs8.pikabu.ru/avatars/2371/x2371548-727987058.png"
            addToCart={this.addToCart}
          ></ItemCard>
        </div>
      </>
    );
  }
}
