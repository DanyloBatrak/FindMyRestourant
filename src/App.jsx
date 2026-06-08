import "./App.css";
import restaurantIcon from "./assets/main_icon.png";
import Restourants from "./components/Restourants";
const App = () => {
  return (
    <div className="App">
      <img src={restaurantIcon} alt="Icon" />
      <h1>Find Your Restoraut For Own Taste</h1>
      <Restourants />
    </div>
  );
};

export default App;
