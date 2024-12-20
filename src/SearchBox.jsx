/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL ="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY ="049a1fbc78e918cd79a746597098acd0";
  let getWeatherInfo = async()=>{
    try{
      let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse = await response.json(); 
          console.log(jsonResponse);
          let result = {
            city:city,
             temp:jsonResponse.main.temp,
             tempMax:jsonResponse.main.temp_max,
             tempMin:jsonResponse.main.temp_min,
             humidity:jsonResponse.main.humidity,
             feelsLike:jsonResponse.main.feels_like,
             weather:jsonResponse.weather[0].description,
          };
          console.log(result);
          return result;
    }catch(err){
      throw err;
    }
    
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
 let handleSubmit = async (evt)=>{
  try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo)
  }catch(err){
    setError(true);
  }
   
 };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such Place Exists !</p>}
      </form>
    </div>
  );
}
