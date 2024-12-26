import React from "react";
import "../styles/WeatherDisplay.css"

const WeatherDisplay =({WeatherData})=>{
    const temperatureStyle = {
        color: WeatherData.temperature > 20 ? 'red' : 'blue'
    };
    return (
        <div className="mainWrapper">
            <div className="TemperatureDiv">
                <div className="tempText">Temperature</div>
                
                <p style={temperatureStyle} className="value">{WeatherData.temperature}</p>
            </div>
            <div className="ConditionDiv">
                <div className="condText">Conditions</div>
                <p className="value">{WeatherData.conditions}</p>
            </div>
        </div>
    )
}

export default WeatherDisplay;