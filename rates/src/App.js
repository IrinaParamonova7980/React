import "./App.css";
//import Boris from "./components/boris/Boris";
//import Button from "./components/button/Button";
import Rates from "./components/rate/Rates";
import Timer from "./components/timer/Timer";

//import Card from "./components/card/Card";
//import Login from "./components/login/Login";
// import Component from "./components/component/Component";
// import themelight from "./components/component/themelight.module.scss";
// import themedark from "./components/component/themedark.module.scss";
//const isAutorized = "Маруся";

const rates = [
  {
    name: "Безлимитный 300",
    price: "300",
    speed: "до 10 Мбит/сек",
  },
  {
    name: "Безлимитный 450",
    price: "450",
    speed: "до 50 Мбит/сек",
  },
  {
    name: "Безлимитный 550",
    price: "550",
    speed: "до 100 Мбит/сек",
    isSelected: true,
  },
  {
    name: "Безлимитный 1000",
    price: "1000",
    speed: "до 200 Мбит/сек",
  },
];

function App() {
  return (
    <div className="App">
      {rates.map((rate, index) => (
        <Rates
          name={rate.name}
          price={rate.price}
          speed={rate.speed}
          isSelected={rate.isSelected}
          key={index}
        ></Rates>
      ))}
      {/* <div>
        <Card></Card>
        <Component theme={themedark}></Component>
        <Component theme={themelight}></Component>
        <Login isAutorized={isAutorized} name={isAutorized}></Login>
      </div> */}
      {/* <Button name={'Нажми меня'}  id="test" title="button"></Button> */}
      {/*<Boris></Boris>*/}
      <Timer minutes={"10"} seconds={'20'}></Timer>
    </div>
  );
}

export default App;
