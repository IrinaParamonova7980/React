import React from "react";
import "./login.module.scss";

// function NameUser() {
//   return <div className="text">Имя</div>;
// }

// function Form() {
//   return (
//     <form>
//       <input type="text" className="text">
//         Логин
//       </input>
//       <input type="text" className="text">
//         Пароль
//       </input>
//     </form>
//   );
// }

// class Login extends React.Component {
//   render() {
//     let actionItem;

//     if (this.props.isAutorized) {
//       actionItem = <Form></Form>;
//     } else {
//       actionItem = <NameUser></NameUser>;
//     }
//     return <div>{actionItem}</div>;
//   }
// }

class Login extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAutorized ? (
          <div className="text">{this.props.name}</div>
        ) : (
          <div>
            Введите логин:
            <input type="text" className="login" />
            Введите пароль:
            <input type="text" className="password" />
          </div>
        )}
      </div>
    );
  }
}

export default Login;
