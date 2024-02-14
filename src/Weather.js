//https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/


//Installation: npm install semantic-ui-react semantic-ui-css
//              npm install moment --save

// Once it has been installed, open index.js and import the library. 
//Just copy and paste the following command in your index.js file:
//              import 'semantic-ui-css/semantic.min.css'


import { useState, useEffect } from "react";
import WeatherResults from "./WeatherResults";
// import Spinner from 'react-bootstrap/Spinner';
import "./App.css"

export function Weather(){

    const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
    const REACT_APP_API_KEY = '7f89890301e02d4e43a03d0d66331075'


    const [data, setData] = useState([]);

                const [lat, setLat] = useState([]);
                const [long, setLong] = useState([]);

       useEffect(() => {
            const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
          });

    await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData();
}, [lat,long])

    return(
    <div className="main">

        {(typeof data.main != 'undefined') ? (
        <WeatherResults weatherData = {data}/>
      ): (
          <div>
            {/* <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> */}
          </div>
      )}

    </div>)
}
