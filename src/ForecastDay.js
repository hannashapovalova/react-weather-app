import React from 'react';
import Icons from './Icons';

export default function ForecastDay(props) {

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature} °C `;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °C `;
  }

  function dayOfWeek() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[day];
    
  }

    return (
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
                {dayOfWeek()}
              </h2>
              <p className="forecast-temperature">
                {minTemperature()} - {maxTemperature()}
              </p>
            </div>
            <div className="col forecast-icon">
                <Icons
                 code={props.data.weather[0].icon} 
                 size="65" />
            </div>
          </div>
    );
}