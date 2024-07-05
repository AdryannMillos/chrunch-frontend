// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Filmstrip from './components/Filmstrip';

function App() {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const thumbnailsToShow = 4;

  useEffect(() => {
    fetch('http://localhost:3001/api/templates')
      .then(response => response.json())
      .then(data => {
        setTemplates(data);
        setCurrentTemplate(data[0]);
      })
      .catch(error => console.error('Error fetching templates:', error));
  }, []);

  const handleThumbnailClick = (template) => {
    setCurrentTemplate(template);
  };

  const nextThumbnails = () => {
    setStartIndex(startIndex + thumbnailsToShow);
  };

  const previousThumbnails = () => {
    setStartIndex(startIndex - thumbnailsToShow);
  };

  return (
    <div id="container">
      <Header title="Code Development Project" />
      <div id="main" role="main">
        {currentTemplate && <MainImage template={currentTemplate} />}
        <Filmstrip
          templates={templates}
          currentTemplate={currentTemplate}
          startIndex={startIndex}
          thumbnailsToShow={thumbnailsToShow}
          onThumbnailClick={handleThumbnailClick}
          onNext={nextThumbnails}
          onPrevious={previousThumbnails}
        />
      </div>
    </div>
  );
}

export default App;
