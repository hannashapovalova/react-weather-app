import './Weather.css';

export default function Weather() {
    return (
     <div>
        <div className="search-container">
          <p className="search-title">
            Type city here...
          </p>
          <input className="search-input" type="text" placeholder="Search"></input>
        </div>
        {/* <div className="row search-block">
          <form className="search-form">
            <input type="search" placeholder="Enter a city" className="search-input">
            </input>
            <input type="submit" value="Search" className="search-button">
            </input>
          </form>
        </div> */}
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
              <div className="col">
                
              </div>
            </div>
            <div className="row weather-conditions-block">
              <div className="col-4 wind">
                <p>Wind</p>
                <p className="conditions-value">4.15 m/h</p>
              </div>
              <div className="col-4 humidity">
                <p>Humidity</p>
                <p className="conditions-value">20%</p>
              </div>
              <div className="col-4 precipitation">
                <p>Precipitation</p>
                <p className="conditions-value">2%</p>
              </div>
            </div>
          </div>
          <div className="col-4 forecast-block right-block">
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2 className="forecast-date">Monday</h2>
                <p className="forecast-temperature">24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
}