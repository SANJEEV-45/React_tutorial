import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";
import Carage from "./Carage";

function App() {
  const brand = "Ford";
  const Cars = [
    { item: 1, brand: "Ford"},
    { item: 2, brand: "Bucatti"},
    { item: 3, brand: "Nisssan"},
  ];
  return (
      <ul>
        { Cars.map((carInfo) => <li><Car carInfo={carInfo} /></li>) }
      </ul>
  );
}

export default App;
