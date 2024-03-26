import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search');
      setDogImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const handleNewImageClick = () => {
    fetchDogImage();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DOG IMAGES GENERATING API</h1>
        <div className="dog-container">
          <div className="dog-image-container">
            {dogImage && <img src={dogImage} alt="Dog" />}
          </div>
        </div>
        <button className="new-image-button" onClick={handleNewImageClick}>Get New Dog Image</button>
      </header>
    </div>
  );
  
  
  
}

export default App;
