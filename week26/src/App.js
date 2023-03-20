import styles from "./App.css";

import Cat from "./components/Cat";
import "./components/Cat.scss";

const cats = [
  {
    name: "Мурзик",
    url: "http://crazymama.ru/images/foto/70/70382.jpeg",
    text: "Хороший",    
  },
  {
    name: "Васька",
    url: "https://2ch.hk/vg/arch/2022-12-12/src/45031634/16695811280610.jpg",
    isSelected: true,
  },
  {
    name: "Снежок",
    url: "https://i.artfile.me/wallpaper/21-07-2015/800x600/zhivotnye-koty-koshka-kotenok-pushistyj--952853.jpg",
  },
];

const myStyle = {
  width: 200,
  height: 50,
	fontSize: '1.5em',
  backgroundColor: 'red',
};

const Button = () => (
  <button style={myStyle}>Нажми меня</button>
)

function App(props) {
  return (
    <div>
      <div className={`${styles.App} ${props.theme.App}`}>
        {cats.map((cat) => (
          <Cat
            name={cat.name}
            url={cat.url}
            text={cat.text}
            isSelected={cat.isSelected}
          ></Cat>
        ))}
      </div>
      <div className={styles.position}>
        <button className={styles.button}>Кнопка</button>
      </div>
      <Button></Button>
    </div>
  );
}

export default App;
