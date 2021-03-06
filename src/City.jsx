import React, { useState, useEffect } from 'react';
import MeasureChart from './MeasureChart';
import city from './assets/city.jpg';
import location from './assets/location.jpg';
import './Style/City.css';

function City(props) {
  console.log("city is here", props)

  const [measure, setMeasure] = useState([])


  const locationArr = [...new Set(props.city.results.map(
    (location) => location.location
  ))]

  useEffect(() => {
    let airUrl = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?city=${props.city.results[0].city}`;
    const makeSecondApiCall = () => {
      fetch(airUrl)
        .then(res => res.json())
        .then(data => {
          setMeasure((data))
          console.log("api call here", data)
        })
    }
    makeSecondApiCall()
  }, [props.city.results[0].city]);


  return (
    <>
      <div className='card-container'>
        <img className="city-pic" src={city} alt="city" />
        <div> City: {props.city.results[0].city} </div>
        <div className="dropdown">
          <img className="location-pic" src={location} alt="location" />
          <div>
            <select>
              {locationArr.map((locate, index) => (
                <option key={index} value={locate}>
                  {locate}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {measure.results?.map((m, index) => (
            <MeasureChart
              measure={m.value}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default City


