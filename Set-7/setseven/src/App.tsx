import "./App.css";
import Movies from "./components/Movies";
import Users from "./components/Users";
import WeatherReport from "./components/WeatherReport";

function App() {
  return (
    <>
      <WeatherReport />
      <Users />
      <Movies />
    </>
  );
}

export default App;
