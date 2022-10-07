import React, {useState} from 'react';
import './Weather.css';
import WeatherInfo from './WeatherInfo';
import axios from "axios";




export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.dafaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  
  function search() {
    const apiKey = "eeeccc029bc61d7bb2091d7e6ac16dbc";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
    <div>
      <div className="search-container">
        <p className="search-title">
         Type city here...
        </p>
        <form onSubmit={handleSubmit}>
          <input
           className="search-input" 
           type="search" 
           placeholder="Search"
           onChange={handleCityChange}>
          </input>
          <input
           type="submit"
           value="Search">
          </input> 
        </form>
      </div>
      <WeatherInfo  data={weatherData}/>
    </div>
    );

  } else {
    search();
    return "Loading...";
  }
}