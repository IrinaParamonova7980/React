import styles from "./button.module.scss";
import React, { useState } from "react";

export default function Button(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <button {...props} className={styles.test} onClick={handleChange}>
      {pressed ? "Нажата" : "Нажми меня"}
    </button>
  );
}

// export default class Button extends React.Component {
//     static defaultProps = {
//       name: "Привет!",
//     };

//     constructor(props) {
//       super(props);
//       this.state = {
//         pressed: false,
//       };
//     }

//     handleChange = () => {
//       this.setState({ pressed: !this.state.pressed });
//     };

//     render() {
//       const name = this.props.name;
//       const { ...props } = this.props;
//       return (
//         <button {...props} className={styles.test} onClick={this.handleChange}>
//           {this.state.pressed ? "Нажата" : "Нажми меня"}
//         </button>
//       );
//     }
//   }
