import React from "react";
import { useState } from "react";

// export default class Counter extends React.Component {
//   state = {
//     count: 0,
//   };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1,
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
