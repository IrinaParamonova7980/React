import React from "react";

export default class Component extends React.Component {
  render() {
    return (
      <div className={this.props.theme.outer}>
        <div className={this.props.theme.inner}>
          <h3>Заголовок</h3>
        </div>
      </div>
    );
  }
}
