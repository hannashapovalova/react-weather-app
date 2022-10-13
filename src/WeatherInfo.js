import React from 'react';
import Icons from './Icons';
import ConstantIcons from './ConstantIcons';
import CurrentDate from './CurrentDate';
import CurrentTemperature from './CurrentTemperature';
import './Weather.css';



export default function WeatherInfo(props) {
    return (
        <div className="col main-block">
          <div className="row weather-block">
            <div className="col">
              <div className="row current-city-and-date-block">
                <h1 className="current-city">
                  {props.data.city}
                </h1>
                <h2 className="current-date">
                  <CurrentDate date={props.data.date}/>
                </h2>
              </div>
              <div className="row">
                <CurrentTemperature celsius={props.data.temperature}/>
                  <h2 className="current-description">
                    {props.data.description}
                  </h2>
              </div>
            </div>
            <div className="col current-icon">
              <Icons
               code={props.data.icon} 
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
                <div className="col-6 conditions-icon">
                  <ConstantIcons
                   icon="WIND"  
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
                <div className="col-6 conditions-icon">
                  <ConstantIcons
                   icon="FOG"  
                   size="65" />
                </div>
              </div>
            </div>
            <div className="col precipitation">
              <p>
                Pressure
              </p>
              <div className="row">
                <div className="col-6">
                  <p className="conditions-value">
                    {props.data.pressure} hPa
                  </p>
                </div>
                <div className="col-6 conditions-icon">
                  <ConstantIcons
                   icon="RAIN" 
                   size="65" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}