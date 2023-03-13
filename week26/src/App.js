import logo from "./logo.svg";
import "./App.css";
import Cat from "./components/Cat";
import "./components/Cat.css";

const cats = [
  {
    name: "Мурзик",
    url: "http://crazymama.ru/images/foto/70/70382.jpeg",
    text: "Хороший",
  },
  {
    name: "Васька",
    url: "https://2ch.hk/vg/arch/2022-12-12/src/45031634/16695811280610.jpg",
  },
  {
    name: "Снежок",
    url: "https://i.artfile.me/wallpaper/21-07-2015/800x600/zhivotnye-koty-koshka-kotenok-pushistyj--952853.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {cats.map((cat) => (
        <Cat name={cat.name} url={cat.url} text={cat.text}></Cat>
      ))}
    </div>
  );
}

export default App;