import React from 'react';



function Location(props) {
  console.log("props for location here", props)

  return (
    <select>
      <option key={props.location}>{props.location}</option>
    </select>
  )
}

export default Location 
