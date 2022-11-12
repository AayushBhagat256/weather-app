
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const apiKey = "c0ddbeb265ee7a33f45d56a9b14656a0";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");


  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then(
      (res) => {
        console.log("responce", res.data)
        setData(res.data)
      }
    ).catch(
      (err) => {
        console.log("error", err)
      }
    )

  }

  useEffect(
    () => {
      getWeatherDetails("delhi")
    }, []
  )

  const handleSearch = () => {
    //  alert("clicked")
    getWeatherDetails(inputCity)
  }

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)

  }




  return (
    <div className="App">
      <div className="weatherbg">
        <h1>Weather-App</h1>

        <div className="inputopt my-3">
          <input type="text" className="form-control" placeholder='enter city name' onChange={handleChangeInput} value={inputCity} />
          <button type="button" className="btn btn-primary my-3" onClick={handleSearch}>Search</button>
        </div>
        <div className="box1">
        <div className="resultbox">
          <img className="weathorIcon" alt=''
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
          <h5 className='weatherCity'>{data?.name}</h5>
          <h6 className='country'>country code : {data?.sys?.country}</h6>
          <h6 className='weatherTemp'>{((data?.main?.temp) - 273.15).toFixed(2)} &#176;C</h6>
          <h6 className='feelsLike'>feels like {((data?.main?.feels_like) - 273.5).toFixed(2)}&#176;C</h6>
          <h6 className='like'>Wind speed {data?.wind?.speed}</h6>
        </div>
      </div>
      </div>

      


    </div>
  );
}

export default App;
