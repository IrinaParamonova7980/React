"use strict";

//Создание компонента react (1 способ) для небольших кусков
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Мне это понравилось.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Мне нравится"
    );
  }
}

const domCotainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domCotainer);
