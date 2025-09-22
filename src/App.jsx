import { useState, useEffect } from "react";
import * as weatherService from "./services/weatherService";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState({
    location: "",
    temp: "",
    condition: "",
  });

  // Component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const cords = pos.coords;
      fetchWeather(`${cords.latitude}, ${cords.longitude}`);
    });
  }, []);

  // Component updates when weather changes
  useEffect(() => {
    console.log("weather state changed");
  }, [weather]);

  // Component unmounts
  useEffect(() => {
    return () => {
      console.log("component unmounts");
    };
  }, []);

  const fetchWeather = async (city) => {
    const weatherData = await weatherService.show(city);

    setWeather({
      location: weatherData.location.name,
      temp: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
    });
  };

  return (
    <>
      <h1>Weather API</h1>
      <WeatherDetails weather={weather} />
      <WeatherSearch fetchWeather={fetchWeather} />
    </>
  );
};

export default App;
