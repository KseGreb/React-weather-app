// npm install --save moment-timezone

import React from 'react';
import moment from 'moment-timezone';
import "./App.css"

const WeatherResults = ({weatherData}) => (
  <div className="main">
      <p className="header">The weather in {weatherData.name}</p>
      <div className="flex">
        <p className="day">Today is: {moment().format('dddd')}</p>
        <p className="day">{moment().format('LL')}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {Math.round(weatherData.main.temp)} &deg;C</p>
        <p className="temp">Feels like: {Math.round(weatherData.main.feels_like)} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>
      
      
  </div>
)

export default WeatherResults;
