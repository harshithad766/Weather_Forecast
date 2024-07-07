import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Geolocation from './Geolocation';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [theme, setTheme] = useState('light');
  const apiKey = 'aba6ff9d6de967d5eac6fd79114693cc';

  useEffect(() => {
    if (!city) {
      fetchWeatherData('Kavali'); // Default to Kavali if no city is set
    }
  }, [city]);

  const fetchWeatherData = (city) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    axios.all([
      axios.get(currentWeatherUrl),
      axios.get(forecastUrl)
    ])
    .then(axios.spread((currentRes, forecastRes) => {
      setCurrentWeather(currentRes.data);
      const dailyData = forecastRes.data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
      setForecast(dailyData);
    }))
    .catch(error => {
      console.error('Error fetching weather data:', error);
      setCurrentWeather(null);
      setForecast([]);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}-theme`}>
      <header className="header">
        <h1>Current Weather and 5-Day Forecast</h1>
        <Geolocation onCityChange={setCity} />

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <button onClick={toggleTheme} className="theme-toggle-button">
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>

      {currentWeather && (
        <div className="current-weather">
          <h2>Current Weather in {currentWeather.name}</h2>
          <WeatherCard
            date={new Date(currentWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            icon={currentWeather.weather[0].icon}
            description={currentWeather.weather[0].description}
            temp={currentWeather.main.temp}
            humidity={currentWeather.main.humidity}
            windspeed={currentWeather.wind.speed}
            theme={theme}
          />
        </div>
      )}

      <div className="forecast-container">
        {forecast.map((weather, index) => (
          <WeatherCard
            key={index}
            date={new Date(weather.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            icon={weather.weather[0].icon}
            description={weather.weather[0].description}
            temp={weather.main.temp}
            humidity={weather.main.humidity}
            windspeed={weather.wind.speed}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
