import React, { useEffect, useState } from "react";
import API from "../services/api";

function WeatherPage() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    API.get("/weather")
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>

      <p>Temperature: {weather.temperature}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

export default WeatherPage;
