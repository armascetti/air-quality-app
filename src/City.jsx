import React, { useState, useEffect } from 'react';
import MeasureCard from './MeasureCard';
import city from './assets/city.jpg';
import location from './assets/location.jpg';
import './Style/City.css';


function City(props) {
  console.log("city is here", props)

  const [measure, setMeasure] = useState([])
  const [selection, setSelection] = useState([])

  const locationArr = [...new Set(props.city.results.map(
    (location) => location.location
  ))]

  
  useEffect(() => {
    let airUrl = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?city=${props.city.results[0].city}`;
    
    const makeApiCall = () => {
      fetch(airUrl)
      .then(res => res.json())
      .then(data => {
        setMeasure((data))
        console.log("measure data here", data)
      })
    }
    makeApiCall()
  }, [props.city.results[0].city]);
  

  const handleClick = (city) => {
    if (selection.find(current => current.id === city.id)) {
      setSelection([city])
    }
  };
  
  return (
    <>
      <div className='card-container'>
        <img className="city-pic" src={city} alt="city" />
        <div> City: {props.city.results[0].city} </div>
        <div className="dropdown">
          <img className="location-pic" src={location} alt="location" />
          <div>
            <h6>View measurements by location: </h6>
            {locationArr.map((locate, index) => (<button onClick={handleClick}>
              <ul key={index} value={locate}>
                <span>{locate}</span>
              </ul>
            </button>
            ))}
          </div>
        </div>
        <div>
          {measure.results?.map((m, index) => (
            <MeasureCard
              measure={m}
              key={index}
              selection={selection}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default City


