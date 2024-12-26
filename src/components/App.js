
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const App = () => {
  let defaultinput = { temperature: 0, conditions: "" };
  const [WeatherData, setWeatherData] = useState(defaultinput);

  useEffect(()=>{
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  },[]);

  console.log(WeatherData.temperature);
  console.log(WeatherData.conditions);

  return (
    <div>
      <WeatherDisplay WeatherData={WeatherData}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
