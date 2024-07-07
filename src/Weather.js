// src/Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('Kavali');
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = (city) => {
    const apiKey = "aba6ff9d6de967d5eac6fd79114693cc";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No weather found.');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Debug: Log the fetched data
        setCity(data.city.name);
        setForecast(data.list);
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  return (
    <div className="weather">
      <h1 className="city">Weather in {city}</h1>
      <div className="forecast-container">
        {forecast.slice(0, 5).map((weatherData, index) => (
          <div className="forecast-day" key={index}>
            <h3>{new Date(weatherData.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
            <p>{weatherData.weather[0].description}</p>
            <p>{weatherData.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
