
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState({
               city : "Wonderland",
               feelslike: 24.28,
               humidity:47,
               temp:25.05,
               tempMin:25.05,
               tempMax:25.05,
               weather:"haze",
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
   <div style={{textAlign:"center"}}>
    <h2>Weatehr app by Aman </h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info = {weatherInfo}/>
   </div>
    );
}