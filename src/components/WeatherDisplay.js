import React from "react";
import "../styles/WeatherDisplay.css"

const WeatherDisplay =({WeatherData})=>{
    const temperatureStyle = {
        color: WeatherData.temperature > 20 ? 'red' : 'blue'
    };
    return (
        <div className="mainWrapper">
                <div>
                    
                <p><span style={temperatureStyle} className="value">Temperature: {WeatherData.temperature}</span></p>
            
            <span className="value">Conditions: {WeatherData.conditions}</span>
                </div>
        </div>
    )
}

export default WeatherDisplay;