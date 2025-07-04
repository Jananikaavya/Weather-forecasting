import React from 'react';

const HourlyForecast = ({ data }) => {
  if (!data?.forecast?.forecastday) return null;

  const hourlyData = data.forecast.forecastday[0].hour;

  return (
    <div className="hourly-forecast">
      <h3>24-Hour Forecast</h3>
      <div className="hourly-container">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <span>{new Date(hour.time).getHours()}:00</span>
            <img 
              src={`https:${hour.condition.icon}`} 
              alt={hour.condition.text} 
            />
            <span>{Math.round(hour.temp_c)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;