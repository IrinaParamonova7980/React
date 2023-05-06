import React from "react";

export default class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClick = (id, title) => (e) => {
    console.log("Действие на строке " + id + title);
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { id, title } = this.props;
    const { count } = this.state;
    return (
      <>
        <a href="#" onClick={this.onClick(id, title)}>
          click {count}
        </a>
        <p>{title}</p>
      </>
    );
  }
}
