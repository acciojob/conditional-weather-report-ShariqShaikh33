import React from "react";
import "../styles/WeatherDisplay.css"

const WeatherDisplay =({WeatherData})=>{
    const temperatureStyle = {
        color: WeatherData.temperature > 20 ? 'red' : 'blue'
    };
    return (
        <div className="mainWrapper">
                <p className="value"><span style={temperatureStyle} >Temperature: {WeatherData.temperature}</span> Conditions: {WeatherData.conditions}
                </p>

            
        </div>
    )
}

export default WeatherDisplay;