import React from 'react';

const WeatherCard = ({ date, icon, description, temp, humidity, windspeed, theme }) => {
  return (
    <div className={`weather-card ${theme}-theme`}>
      <p className="date">{date}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" className="icon" />
      <p className="description">{description}</p>
      <p className="temp">{temp}°C</p>
      <p className="humidity">Humidity: {humidity}%</p>
      <p className="windspeed">Wind Speed: {windspeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
