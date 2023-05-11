import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      server: "1",
      rememberMe: false,
    };
  }

  //Вариант написания функций все в одной

  handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.name === "login") {
      value = value.toUpperCase();
    }
    this.setState({ [e.target.name]: value });
  };

  //Вариант написания функций отдельно

  //   handleChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value.toUpperCase() });
  //     };

  //     handleChangeCheckbox = (e) => {
  //         this.setState({ [e.target.name]: e.target.checked});
  //       };

  render() {
    return (
      <div>
        <form>
          <h3>Login</h3>
          <div>
            <input
              type="email"
              placeholder="Login"
              value={this.state.login}
              onChange={this.handleChange}
              name="login"
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            ></input>
          </div>
          <div>
            <select
              multiple={true}
              name="server"
              defaultvalue={["1", "2", "3"]}
              onChange={this.handleChange}
            >
              <option value="1">Server1</option>
              <option value="2">Server2</option>
              <option value="3">Server3</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              checked={this.state.rememberMe}
              //onChange={this.handleChangeCheckbox}
              onChange={this.handleChange}
              name="rememberMe"
            />
            RememberMe
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }
}
