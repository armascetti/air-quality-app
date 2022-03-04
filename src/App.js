import React, { useEffect, useState } from 'react';
import Form from './Form';
import City from './City';
import './App.css';

function App() {
  const [cityName, setCityName] = useState('');
  const [cityData, setCityData] = useState('');

  const handleSubmit = city => {
    setCityName(city)
  }

  useEffect(() => {
    let airUrl = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v1/locations?country=US&city=${cityName}`;

    const makeApiCall = () => {
      fetch(airUrl)
        .then(res => res.json())
        .then(data => {
          setCityData((data))
        })
    }
    makeApiCall()
  }, [cityName])

  return (
    <>
      <h1> Find a City Here </h1>
      <Form handleSubmit={handleSubmit} />
      {cityData.results ? <City city={cityData} /> : "Search for a City here"}
    </>
  )
}

export default App;
