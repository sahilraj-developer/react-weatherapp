import axios from "axios";
import React, { useState } from "react";
// import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7d0b358c153a4c406db07e8e5aeac822`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="enter location"
            type="text"
          />
        </div>
        <div className="container">
          <div className="">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? (
                <h1>{(data.main.temp - 273.5).toFixed(2)}&deg;C</h1>
              ) : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && 
            <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{(data.main.feels_like- 273.5).toFixed()}&deg;C</p>
              ) : null}
             
              <p>feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPM</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default App;
