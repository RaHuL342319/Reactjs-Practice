import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch1";
type Weather = {
  temperature: number;
  humidity: number;
  windSpeed: number;
};
const WeatherReport = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toggleoCtooF, setToggleoCtooF] = useState(false);
  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/weather")) as {
        status: number;
        message: string;
        data: any;
      };

      const { status, data } = res;

      if (status === 200) {
        setWeather(data);
        // console.log(data);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!weather) {
    return <p>No Report Available!!</p>;
  }
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Weather</h1>
      <p>
        <b>Temperature: </b>
        {toggleoCtooF ? (
          <>
            {weather.temperature} <sup>o</sup>C
          </>
        ) : (
          <>
            {Math.round((weather.temperature * 9) / 5 + 32)} <sup>o</sup>F
          </>
        )}
      </p>
      <p>Humidity: {weather.humidity} %</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <button onClick={() => setToggleoCtooF(!toggleoCtooF)}>
        Switch to {toggleoCtooF ? "Fahrenheit" : "Celcius"}
      </button>
    </div>
  );
};

export default WeatherReport;
