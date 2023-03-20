import "./App.css";
import Rates from "./components/Rates";
import Component from "./components/Component/Component";
import themeLight from "./components/Component/themelight.css";
import themeDark from "./components/Component/themedark.css";

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
        ></Rates>        
      ))}
      <div>
      <Component theme={themeDark}></Component> 
      <Component theme={themeLight}></Component>
        </div>
    </div>
  );
}

export default App;
