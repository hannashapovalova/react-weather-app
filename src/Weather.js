import './Weather.css';
import Icons from "./Icons";



export default function Weather() {
    return (
     <div>
        <div className="search-container">
          <p className="search-title">
            Type city here...
          </p>
          <input className="search-input" type="text" placeholder="Search"></input>
        </div>
        <div className="row">
          <div className="col-8 main-block left-block">
            <div className="row weather-block">
              <div className="col">
                <div className="row">
                  <h1 className="current-city">Funchal</h1>
                  <h2 className="current-date">Tuesday 12:12</h2>
                </div>
                <div className="row">
                  <div className="temperature-block">
                  <div className="current-temperature">22 ° </div>
                  <div className="unit">C | F</div>
                  </div>
                  <h2 className="current-description">Clear Sky</h2>
                </div>
              </div>
              <div className="col current-icon">
               <Icons icon="CLEAR_DAY" color="white" size="120" />
              </div>
            </div>
            <div className="row weather-conditions-block">
              <div className="col-4 wind">
                <p>Wind</p>
                <div className="row">
                  <div className="col-6">
                    <p className="conditions-value">4.15 m/h</p>
                  </div>
                  <div className="col-6">
                     <Icons icon="WIND" color="white" size="65" />
                  </div>
                </div>
              </div>
              <div className="col-4 humidity">
                <p>Humidity</p>
                <div className="row">
                  <div className="col-6">
                    <p className="conditions-value">20%</p>
                  </div>
                  <div className="col-6">
                    <Icons icon="FOG" color="white" size="65" />
                  </div>
                </div>
              </div>
              <div className="col-4 precipitation">
                <p>Precipitation</p>
                <div className="row">
                  <div className="col-6">
                    <p className="conditions-value">2%</p>
                  </div>
                  <div className="col-6">
                    <Icons icon="RAIN" color="white" size="65" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 forecast-block right-block">
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col forecast-icon">
                <Icons icon="PARTLY_CLOUDY_DAY" color="white" size="65" />
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col forecast-icon">
                <Icons icon="CLEAR_DAY" color="white" size="65" />
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col forecast-icon">
                <Icons icon="CLOUDY" color="white" size="65" />
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col forecast-icon">
                <Icons icon="RAIN" color="white" size="65" />
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col forecast-icon">
                <Icons icon="PARTLY_CLOUDY_DAY" color="white" size="65" />
              </div>
            </div>
          </div>
        </div>
     </div>
    );
}