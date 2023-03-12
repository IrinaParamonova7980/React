import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 9],
  ["Еда", 2],
  ["Дорога", 1],
  ["Отдых", 1],
  ["Учеба", 3],
  ["Сон", 7],
  ["Спорт", 1],
];

export const options = {
  title: "Моя ежедневная активность",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
}

export default App;