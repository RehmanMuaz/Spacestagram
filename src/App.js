import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import './App.css'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?count=10&thumbs=true&api_key=fnQ4Gkwz1IGxcml4lay2TjDTaJNHklkRElbpIlVh")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }
  else if (!isLoaded) {
    return <div className='spinner'/>
  }
  else if (items.length == 0) {
    return <div>No Data</div>
  }
  else {
    return (
      <div className='App'>
      <header>
        <h1>Spacestagram</h1>
        <h5>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</h5>
      </header>
          <ul>
          {
            items.map((item => 
              <li key={item.url}>
                <Card url={item.thumbnail_url ? item.thumbnail_url : item.hdurl} title={item.title} date={item.date} desc ={item.explanation}/>
              </li>
            )
          )
          }
          </ul>
          <button className='RefreshBtn' onClick={() => window.location.reload(false)}>Refresh</button>
          <footer>
            <p1>Copyright © 2022 Muaz Rehman. All rights reserved.</p1>
        </footer>
      </div>
    )
  }
}

export default App;
