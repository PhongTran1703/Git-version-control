import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // State using the useState hook
  const [apodData, setApodData] = useState({});

  // useEffect hook to fetch data
  useEffect(() => {
    const apiKey = "wIaaeoqPtAEJ9UGWdJtbb1axZjlQumWBiEr2Na4q";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
// Fetch data from NASA API
    fetch(apiUrl)
      .then(response => response.json())   // Convert response to JSON
      .then(data => setApodData(data))  // Set the fetched data to apodData state
      .catch(error => console.log(error));  // Log any errors that occur
  }, []);

  return (
    <div className="container">
      <h1>Astronomy Picture of the Day</h1>
      <div className="apod">
        <img id="apod-image" src={apodData.url} alt="Astronomy Picture of the Day" />
        <div className="apod-details">
          <h2 id="apod-title">{apodData.title}</h2>
          <p id="apod-date">Date: {apodData.date}</p>
          <p id="apod-explanation">{apodData.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
