import React, {useState} from 'react';
import './Weather.css';
import Icons from "./Icons";
import axios from "axios";




export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: "Tuesday 12:12",
      iconUrl: ""
    });
  }
  
  if (weatherData.ready) {
    return (
    <div>
      <div className="search-container">
        <p className="search-title">
         Type city here...
        </p>
        <input
         className="search-input" 
         type="text" 
         placeholder="Search">
        </input>
      </div>
      <div className="row">
        <div className="col main-block left-block">
          <div className="row weather-block">
            <div className="col">
              <div className="row">
                <h1 className="current-city">
                  {weatherData.city}
                </h1>
                <h2 className="current-date">
                  {weatherData.date}
                </h2>
              </div>
              <div className="row">
                <div className="temperature-block">
                  <div className="current-temperature">
                    {Math.round(weatherData.temperature)} ° 
                  </div>
                  <div className="unit">
                    C | F
                  </div>
                </div>
                  <h2 className="current-description">
                    {weatherData.description}
                  </h2>
              </div>
            </div>
            <div className="col current-icon">
              <Icons
               icon="CLEAR_DAY" 
               color="white" 
               size="120" />
            </div>
          </div>
          <div className="row weather-conditions-block">
            <div className="col wind">
              <p>
                Wind
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="conditions-value">
                    {weatherData.wind} m/h
                  </p>
                </div>
                <div className="col-6">
                  <Icons
                   icon="WIND" 
                   color="white" 
                   size="65" />
                </div>
              </div>
            </div>
            <div className="col humidity">
              <p>
                Humidity
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="conditions-value">
                    {weatherData.humidity}%
                  </p>
                </div>
                <div className="col-6">
                  <Icons
                   icon="FOG" 
                   color="white" 
                   size="65" />
                </div>
              </div>
            </div>
            <div className="col precipitation">
              <p>
                Precipitation
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="conditions-value">
                    2%
                  </p>
                </div>
                <div className="col-6">
                  <Icons
                   icon="RAIN" 
                   color="white" 
                   size="65" />
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* FORECAST BLOCK */}

        <div className="col forecast-block">
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
                Monday
              </h2>
              <p className="forecast-temperature">
                24 °C
              </p>
            </div>
            <div className="col forecast-icon">
                <Icons
                 icon="PARTLY_CLOUDY_DAY" 
                 color="white" 
                 size="65" />
            </div>
          </div>
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
                Monday
              </h2>
              <p className="forecast-temperature">
                24 °C
              </p>
            </div>
            <div className="col forecast-icon">
              <Icons
               icon="CLEAR_DAY" 
               color="white" 
               size="65" />
            </div>
          </div>
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
              Monday
              </h2>
              <p className="forecast-temperature">
                24 °C
              </p>
            </div>
            <div className="col forecast-icon">
              <Icons
               icon="CLOUDY" 
               color="white" 
               size="65" />
            </div>
          </div>
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
                Monday
              </h2>
              <p className="forecast-temperature">
                24 °C
              </p>
            </div>
            <div className="col forecast-icon">
              <Icons
               icon="RAIN" 
               color="white" 
               size="65" />
            </div>
          </div>
          <div className="row forecast-element">
            <div className="col">
              <h2 className="forecast-date">
                Monday
              </h2>
              <p className="forecast-temperature">
                24 °C
              </p>
            </div>
            <div className="col forecast-icon">
              <Icons
               icon="PARTLY_CLOUDY_DAY" 
               color="white" 
               size="65" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );

  } else {
    const apiKey = "238f6bbecd817b0849866bc3d0d8b987";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.dafaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}