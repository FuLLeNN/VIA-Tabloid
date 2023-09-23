import React, { useState, useEffect } from 'react';
import '../css/Story.css';

function Story() {
  const [storyData, setStoryData] = useState(null);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/story/';
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStoryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="story-container">
      <h1 className="story-heading">Stories</h1>
      {storyData ? (
        <ul className="story-list">
          {storyData.map((story) => (
            <li key={story.id} className="story-item">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <div className='dateOwner-container'>
                <p>Date: {story.date}</p>
                <p>Owner: {story.owner}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="story-loading">Loading...</p>
      )}
    </div>
  );
}

export default Story;