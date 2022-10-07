import React from 'react';
import Icons from './Icons';
import CurrentDate from './CurrentDate';

export default function WeatherInfo(props) {
    return (
    <div className="row">
        <div className="col main-block left-block">
          <div className="row weather-block">
            <div className="col">
              <div className="row">
                <h1 className="current-city">
                  {props.data.city}
                </h1>
                <h2 className="current-date">
                  <CurrentDate date={props.data.date}/>
                </h2>
              </div>
              <div className="row">
                <div className="temperature-block">
                  <div className="current-temperature">
                    {Math.round(props.data.temperature)} ° 
                  </div>
                  <div className="unit">
                    C | F
                  </div>
                </div>
                  <h2 className="current-description">
                    {props.data.description}
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
                    {props.data.wind} m/h
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
                    {props.data.humidity}%
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
    );
}