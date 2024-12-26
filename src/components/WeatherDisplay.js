import React from "react";
import "../styles/WeatherDisplay.css"

const WeatherDisplay =({WeatherData})=>{
    const temperatureStyle = {
        color: WeatherData.temperature > 20 ? 'red' : 'blue'
    };
    return (
        <div className="mainWrapper">
                
                <p><span style={temperatureStyle} className="value">Temperature: {WeatherData.temperature}</span> <span className="value">Conditions: {WeatherData.conditions}</span></p>
        </div>
    )
}

export default WeatherDisplay;