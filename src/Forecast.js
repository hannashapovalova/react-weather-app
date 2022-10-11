import React, {useState} from 'react';
import './Forecast.css';
import ForecastDay from './ForecastDay';
import axios from "axios";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null); 

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
        <div className="col forecast-block">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
              <div key={index}>
              <ForecastDay data={dailyForecast} />
              </div>
            );
            }
          })}
        </div>
    );
  } else {
    
  const apiKey = "238f6bbecd817b0849866bc3d0d8b987";
  const units = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  // const apiKey = `7d478f69e1b2f5d563653f13f5f91d76`;
  // const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return null;
    }
}


