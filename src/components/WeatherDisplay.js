import React from "react";
import "../styles/WeatherDisplay.css"

const WeatherDisplay =({WeatherData})=>{
    const temperatureStyle = {
        color: WeatherData.temperature > 20 ? 'red' : 'blue'
    };
    return (
        <div className="mainWrapper">
            <div className="TemperatureDiv">
                
                <span style={temperatureStyle} className="value">Temperatur: {WeatherData.temperature}</span>
            </div>
            <div className="ConditionDiv">
                <span className="value">Conditions: {WeatherData.conditions}</span>
            </div>
        </div>
    )
}

export default WeatherDisplay;