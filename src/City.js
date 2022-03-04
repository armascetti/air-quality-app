import React from 'react';
// import Location from './Location'
import './Style/City.css'

function City(props) {
  console.log("city is here", props)

  const locationArr = [...new Set(props.city.results.map(
    (location) => location.location
  ))]

  return (
    <>
      <div className='card-container'>
        <h2>{props.city.city} </h2>
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
    </>
  )
}

export default City

// {/* <div>
//   {place.locations.map((location, index) => (
//     <Location
//       key={index}
//       location={location}
//     />
//   ))}
// </div> */}

