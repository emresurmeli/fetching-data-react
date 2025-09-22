import { useState } from "react";

const WeatherSearch = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather Data</button>
    </form>
  );
};

export default WeatherSearch;
