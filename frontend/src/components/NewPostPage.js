import React, { useState } from 'react';
import '../css/NewPostPage.css';

function NewPostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [department, setDepartment] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        id: 0,
        title: title,
        description: content,
        owner: department,
        date: new Date().toISOString(),
      };
      try {
        const response = await fetch('http://localhost:8080/api/story/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setTitle('');
        setContent('');
        setDepartment('');
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  
  return (
    <div className="new-post-container">
      <h1 className="new-post-heading">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Department:</label>
          <textarea
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewPostPage;
