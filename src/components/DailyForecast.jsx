import React from 'react';

const DailyForecast = ({ data }) => {
  if (!data?.forecast?.forecastday) return null;

  return (
    <div className="daily-forecast">
      <h3>5-Day Forecast</h3>
      <div className="daily-container">
        {data.forecast.forecastday.map((day, index) => (
          <div key={index} className="daily-item">
            <span>
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <img 
              src={`https:${day.day.condition.icon}`} 
              alt={day.day.condition.text} 
            />
            <div className="daily-temp">
              <span>{Math.round(day.day.maxtemp_c)}°</span>
              <span className="min-temp">{Math.round(day.day.mintemp_c)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;