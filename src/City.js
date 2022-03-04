import React from 'react';
import Location from './Location'
import './Style/City.css'

function City(props) {
  console.log("city is here", props)
  const place = props.city
  let locations = []
  return (
    <>
      <div className='card-container'>
        <div>{place.city} </div>
        <div>{place.locations}</div>
        <div>
          {place.locations.map((location, index) => (
            <Location
              key={index}
              location={location}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default City