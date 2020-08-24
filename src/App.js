import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        } 
    }

    const searchBtn = async(e)=>{
        const data = await fetchWeather(query);

        setWeather(data);
        setQuery('');
    } 
    

    return (
        <div className="main-container">
            <input type="text"className="search" placeholder="Search..." value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            <button className="search-btn" onMouseDown={searchBtn} >Search</button>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup style={{background:"#456fad",color:"white",padding:"0.2em 0.2em",borderRadius:"0.3em", marginLeft:"0.3em"}}>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p id="weather-description">{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;