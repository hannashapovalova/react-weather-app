import './Weather.css';

export default function Weather() {
    return (
     <div>
        <div className="row search-block">
          Serach
        </div>
        <div className="row">
          <div className="col-8 left-block">
            <div className="row main-block">
              Main block
            </div>
            <div className="row">
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
          <div className="col-4 right-block">
            <ul>
              <li>Monday</li>
              <li>Monday</li>
              <li>Monday</li>
              <li>Monday</li>
              <li>Monday</li>
            </ul>
          </div>
        </div>
     </div>
    );
}