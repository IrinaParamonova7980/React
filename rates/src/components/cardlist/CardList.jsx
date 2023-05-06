import React from "react";
import ItemCard from "../itemCard/ItemCard";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: 0 };

    //для передачи от ребенка родителю
    this.child1 = React.createRef();
  }

  addToCart = () => {
    this.setState({
      itemsInCart: this.state.itemsInCart + 1,
    });
  };

  clean = () => {
    this.setState({ itemsInCart: 0 });
    this.child1.current.clean();
  };

  render() {
    return (
      <>
        <p>В корзине {this.state.itemsInCart} вещей</p>
        <button onClick={this.clean}>Очисить корзину</button>
        <div style={{ display: "flex" }}>
          {this.props.items.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              price={item.price}
              imgLink={item.imgLink}
              addToCart={this.addToCart}
              ref={this.child1}
            />
          ))}
          {/* <ItemCard
            title="Котик сидит"
            price="300"
            imgLink="https://cs13.pikabu.ru/avatars/3128/x3128007-1508104989.png"
            addToCart={this.addToCart} ref={this.child1}
          ></ItemCard>
          <ItemCard
            title="Котик лежит"
            price="40"
            imgLink="https://cs8.pikabu.ru/avatars/2371/x2371548-727987058.png"
            addToCart={this.addToCart} ref={this.child1}
          ></ItemCard> */}
        </div>
      </>
    );
  }
}
