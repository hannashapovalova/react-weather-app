import React, {useState} from 'react';


export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9/5) + 32;
  }

  if (unit === 'celsius') {
    return (
    <div className="temperature-block">
      <div className="current-temperature">
       {Math.round(props.celsius)} ° 
      </div>
      <div className="unit">
        C | 
        <a
         href="/"
         onClick={convertToFahrenheit}
        >
        {" "}F
        </a> 
      </div>
    </div>
  );
  } else {
    return (
      <div className="temperature-block">
      <div className="current-temperature">
       {Math.round(fahrenheit())} ° 
      </div>
      <div className="unit">
        <a
         href="/"
         onClick={convertToCelsius}>
          C{" "}
        </a>
         | F
      </div>
    </div>
    );
  }
  
}

