import React from "react";

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  //первый способ
  // onClick = (title, e) => {
  //   this.setState({ title: card.title });
  // };

  //второй способ
  // onClick = (title) => (e) => {
  //   this.setState({ title: card.title });
  // };

  //третий способ
  onClick = (e) => {
    this.setState({ title: e.target.dataset.title });
    //вызов из детского компонента
    this.props.addToCart();
  };

  clean = (e) => {
    this.setState({title:""})
  }

  render() {
    const { title, price, imgLink } = this.props;

    return (
      <>
        <div className="card">
          <div className="card-body">
            <img src={imgLink} alt={title} />
            <h4 className="card-title">{title}</h4>
            <span className="card-price">${price}</span>
          </div>
          {/* первый способ */}
          {/* <button onClick={(e) => this.onClick(title, e)}>Добавить</button> */}

          {/* второй способ */}
          {/* <button onClick={this.onClick(title)}>Добавить</button> */}

          {/* третий способ */}
          <button data-title={title} onClick={this.onClick}>
            Добавить
          </button>
          {this.state.title && <p>Вы положили в корзину{this.state.title}</p>}
        </div>
      </>
    );
  }
}
