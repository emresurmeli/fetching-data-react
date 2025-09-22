const WeatherDetails = ({ weather }) => {
  const hasWeather = () => {
    return weather.location && weather.condition && weather.temp;
  };

  return (
    <div>
      {hasWeather() && (
        <>
          <h3>Location: {weather.location}</h3>
          <h3>Current weather: {weather.temp}</h3>
          <h3>Condition: {weather.condition}</h3>
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
