import React from "react";
import "./login.module.scss";

function NameUser() {
  return <div className="text">Имя</div>;
}

function Form() {
  return (
    <form>
      <input type="text" className="text">
        Логин
      </input>
      <input type="text" className="text">
        Пароль
      </input>
    </form>
  );
}

class Login extends React.Component {
  render() {
    let actionItem;

    if (this.props.isAutorized) {
      actionItem = <Form></Form>;
    } else {
      actionItem = <NameUser></NameUser>;
    }
    return <div>{actionItem}</div>;
  }
}

export default Login;
