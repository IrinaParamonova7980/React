import React from "react";

export default class Component extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={theme.outer}>
        <div className={theme.inner}>
          <h3>Заголовок</h3>
        </div>
      </div>
    );
  }
}
