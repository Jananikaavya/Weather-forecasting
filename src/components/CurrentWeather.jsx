import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { location, current } = data;

  return (
    <div className="current-weather">
      <h2>{location.name}, {location.country}</h2>
      <div className="weather-main">
        <div className="weather-icon">
          <img 
            src={`https:${current.condition.icon}`} 
            alt={current.condition.text} 
          />
          <span>{current.condition.text}</span>
        </div>
        <div className="weather-temp">
          <h1>{Math.round(current.temp_c)}°C</h1>
          <div className="temp-range">
            <span>Feels Like: {Math.round(current.feelslike_c)}°</span>
          </div>
        </div>
      </div>
      <div className="weather-details">
        <div>
          <span>Humidity</span>
          <span>{current.humidity}%</span>
        </div>
        <div>
          <span>Wind</span>
          <span>{current.wind_kph} km/h</span>
        </div>
        <div>
          <span>UV Index</span>
          <span>{current.uv}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;