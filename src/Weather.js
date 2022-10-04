import './Weather.css';

export default function Weather() {
    return (
     <div>
        <div className="row search-block">
          Serach
        </div>
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
            <div className="row weather-conditions">
              <div className="col-4 wind">
                Wind
              </div>
              <div className="col-4 humidity">
                Humidity
              </div>
              <div className="col-4 precipitation">
                Precipitation
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