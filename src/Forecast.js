import React from 'react';
import ConstantIcons from './ConstantIcons';
import './Forecast.css';


export default function Forecast() {
    return (

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
                <ConstantIcons
                 icon="PARTLY_CLOUDY_DAY" 
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
              <ConstantIcons
               icon="CLEAR_DAY" 
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
              <ConstantIcons
               icon="CLOUDY" 
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
              <ConstantIcons
               icon="RAIN"  
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
              <ConstantIcons
               icon="PARTLY_CLOUDY_DAY" 
               size="65" />
            </div>
          </div>
        </div>
    );
}


