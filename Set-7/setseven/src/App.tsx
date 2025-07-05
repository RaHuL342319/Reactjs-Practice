import "./App.css";
import Movies from "./components/Movies";
import RandomQuotes from "./components/RandomQuotes";
import User from "./components/User";
import Users from "./components/Users";
import WeatherReport from "./components/WeatherReport";

function App() {
  return (
    <>
      <WeatherReport />
      <User />
      <Movies />
      <Users />
      <RandomQuotes />
    </>
  );
}

export default App;
