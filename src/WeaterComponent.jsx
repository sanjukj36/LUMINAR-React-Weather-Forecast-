import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const getRandomCountry = async () => {
        try {
            const state = document.getElementById("locationInput").value;

            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);

            const allWeather = await weather.json();
            console.log(allWeather);
            setWeatherData(allWeather);
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }

    const renderWeatherInfo = () => {
        if (weatherData) {
            const { main, name, sys, wind, main: { humidity, pressure }, timezone } = weatherData;

            // Your provided timezone offset in seconds (19800 seconds is GMT +05:30)
            const timezoneOffsetInSeconds = timezone;

            // Get the current UTC time in milliseconds
            const currentUTCTime = Date.now();

            // Calculate the local time by adding the timezone offset
            const localTime = new Date(currentUTCTime + timezoneOffsetInSeconds * 1000);

            // Format the date according to the desired format
            const options = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            };
            const formattedTime = localTime.toLocaleString('en-US', options);

            return (
                <>
                <div className="d-flex flex-column text-center mt-3 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold text-primary">{main.temp}°C</h6>
                    <span className=" text-dark-emphasis"><strong>{name}</strong></span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                        <div><i className="fas fa-wind fa-fw text-muted"></i> <span className="ms-1">Country:-<strong className='text-dark-emphasis'> {sys.country}</strong></span></div>
                        <div><i className="fas fa-tint fa-fw text-muted"></i> <span className="ms-1">Feels like:- <strong className='text-dark-emphasis'>{main.feels_like}°C </strong></span></div>
                        <div><i className="fas fa-sun fa-fw text-muted"></i> <span className="ms-1">Humidity:- <strong className='text-dark-emphasis'>{humidity}% </strong></span></div>
                        <div><i className="fas fa-sun fa-fw text-muted"></i> <span className="ms-1">Wind:-<strong className='text-dark-emphasis'> {wind.speed}</strong></span></div>
                        <div><i className="fas fa-sun fa-fw text-muted"></i> <span className="ms-1">Pressure:-<strong className='text-dark-emphasis'> {pressure}</strong></span></div>
                    </div>
                    
                </div>
                <div className="mt-3 text-info-emphasis"><i className="far fa-clock fa-fw text-muted"></i> <span className="ms-1 "><strong>{formattedTime}</strong></span></div>
            </>
            
            );
        } else if (weatherData==""||error) {
            return <div>Error fetching weather data. Please try again later.</div>;
        } else {
            return null;
        }
    };

    return (
        <div>
           
            <InputGroup className="mb-3">
                <Form.Control
                id="locationInput"
                type="text"
                placeholder="Enter location"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button onClick={getRandomCountry} variant="outline-primary" id="button-addon2">
                Get Weather                
                </Button>
            </InputGroup>
           
            <div id="result">{renderWeatherInfo()}</div>
        </div>
    );
}

export default WeatherComponent;
