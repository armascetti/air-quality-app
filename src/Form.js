import React, { useState } from 'react';
import './Style/Form.css';

function Form(props) {

  const [cityName, setCityName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(cityName)
    setCityName('')
  };
  const handleChange = e => {
    const city = e.target.value
    setCityName(city)
  };
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="cityName"
        type="text"
        value={cityName}
        onChange={handleChange}
      />
      <input className="city-info" type="submit" value="Find City Info" />
      <button className="search-btn" onClick={refreshPage}> Try another search </button>
    </form>
  )
}


export default Form 