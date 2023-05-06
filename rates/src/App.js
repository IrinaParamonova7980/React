import "./App.css";
import CardList from "./components/cardlist/CardList";
//import Counter from "./components/counter/Counter";
//import Boris from "./components/boris/Boris";
//import Button from "./components/button/Button";
//import Rates from "./components/rate/Rates";
//import Timer from "./components/timer/Timer";
import useLocalStorage from "./useLocalStorage";

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
  const [items, setItem] = useLocalStorage("item", [
    {
      title: "Котик 1",
      price: "300",
      imgLink: "https://cs13.pikabu.ru/avatars/3128/x3128007-1508104989.png",
    },
    {
      title: "Котик 2",
      price: "500",
      imgLink: "https://cs8.pikabu.ru/avatars/2371/x2371548-727987058.png",
    },
  ]);

  return (
    <div className="App">
      {/* {rates.map((rate, index) => (
        <Rates
          name={rate.name}
          price={rate.price}
          speed={rate.speed}
          isSelected={rate.isSelected}
          key={index}
        ></Rates>
      ))} */}
      {/* <div>
        <Card></Card>
        <Component theme={themedark}></Component>
        <Component theme={themelight}></Component>
        <Login isAutorized={isAutorized} name={isAutorized}></Login>
      </div> */}
      {/* <Button name={'Нажми меня'}  id="test" title="button"></Button> */}
      {/*<Boris></Boris>*/}
      {/* <Timer minutes={"10"} seconds={'20'}></Timer> */}
      <CardList items={items}></CardList>
      {/* <Timer></Timer> */}
    </div>
  );
}

export default App;
