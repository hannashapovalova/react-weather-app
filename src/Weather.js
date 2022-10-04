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
                  <h1>Funchal</h1>
                  <h2>Tuesday 12:12</h2>
                </div>
                <div className="row">
                  <h2>22 °C</h2>
                  <h2>Clear Sky</h2>
                </div>
              </div>
              <div className="col">
                IMAGE
              </div>
            </div>
            <div className="row weather-conditions-block">
              <div className="col-4 wind">
                <p>Wind</p>
                <p>4.15 m/h</p>
              </div>
              <div className="col-4 humidity">
                <p>Humidity</p>
                <p>20%</p>
              </div>
              <div className="col-4 precipitation">
                <p>Precipitation</p>
                <p>2%</p>
              </div>
            </div>
          </div>
          <div className="col-4 forecast-block right-block">
            <div className="row forecast-element">
              <div className="col">
                <h2>Monday</h2>
                <p>24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2>Monday</h2>
                <p>24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2>Monday</h2>
                <p>24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2>Monday</h2>
                <p>24 °C</p>
              </div>
              <div className="col">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="row forecast-element">
              <div className="col">
                <h2>Monday</h2>
                <p>24 °C</p>
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