import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [cityName, setCityName] = useState("nepal");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=20e1941622da47abb0952611243006&q=${cityName}&aqi=no`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  }, [cityName]);

  function formHandel(e) {
    e.preventDefault();
    setCityName(e.target.city.value);
  }

  return (
    <>
      <div>
        <nav className="nav">
          <div className="leftnav">
            <img src="./src/image/images.jfif" alt="" />
            <h2>Weather App</h2>
          </div>
          <form onSubmit={formHandel}>
            <input type="text" placeholder="City name" name="city" />
            <button>Search</button>
          </form>
        </nav>
        <div className="body">
        <div className="main">
          <div className="top">
            <h2>
              Current Weather of: {weather.location && weather.location.name},
              {weather.location && weather.location.country}
            </h2>
          </div>
          <hr />
          
          <div className="mid">
            <div className="left">
              <img
                src={
                  weather.current &&
                  weather.current.condition &&
                  weather.current.condition.icon
                }
                alt="Weather Icon"
              />
              <div>
              <h1>{weather.current && weather.current.temp_c}°C</h1>
                Feels like {weather.current && weather.current.feelslike_c}
              </div>
              <h3>
              </h3>
              <h3>
                {weather.current &&
                  weather.current.condition &&
                  weather.current.condition.text}
              </h3>
            </div>
            <div className="right">
              <div className="same">
                <p>Local Time</p>
                <h3>{weather.location && weather.location.localtime}</h3>
              </div>
              <hr />
              <div className="same">
                <p>Wind speed</p>
                <h3>{weather.current && weather.current.wind_kph}km/h</h3>
              </div>
              <hr />
              <div className="same">
                <p>Wind Gust</p>
                <h3>{weather.current && weather.current.gust_kph}km/h</h3>
              </div>
              <hr />
              <div className="same">
                <p>Wind Direction</p>
                <h3>{weather.current && weather.current.wind_dir}</h3>
              </div>
              <hr />
              <div className="same">
                <p>Humidity</p>
                <h3>{weather.current && weather.current.humidity}%</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
