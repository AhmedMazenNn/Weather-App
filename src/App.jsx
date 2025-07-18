
import './App.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search'
import {WEATHER_API_URL , WEATHER_API_KEY} from './api/geoApi';
import {useState} from 'react';
import Forecast from './components/Forecast/Forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handelOnSearchChange = (searchData) => {
    const [lat , lon] = searchData.value.split(" ")
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
  
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({city:searchData.label , ...weatherResponse});
        setForecast({city:searchData.label , ...forecastResponse});
      })
      .catch((err) => console.error(err));
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <>
      <div className="container">
        <Search onSearchChange={handelOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  )
}

export default App
