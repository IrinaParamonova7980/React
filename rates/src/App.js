import "./App.css";
import Rates from "./components/Rates";
import colorA from "./components/themeA.scss";
//import Login from "./components/Login/Login";
import Component from "./components/Component/Component";
import themelight from "./components/Component/themelight.css";
import themedark from "./components/Component/themedark.css";

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
      {rates.map((rate) => (
        <Rates
          name={rate.name}
          price={rate.price}
          speed={rate.speed}
          isSelected={rate.isSelected}
          theme={colorA}
        ></Rates>
      ))}
      <div>
        <Component theme={themedark}></Component>
        <Component theme={themelight}></Component>
        {/* <Login isAutorized={isAutorized} name={isAutorized}></Login> */}
      </div>
    </div>
  );
}

export default App;
