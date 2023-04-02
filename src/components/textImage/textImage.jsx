import React, { useState } from 'react';
import './textImage.css'

function AddTextForm() {
  
  const [text, setText] = useState('');
  const [format , setFormat] = useState('');
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, width, height, format }),
      });

      const data = await response.json();

      if (data.status) {
        setImageUrl(data.data);
        setErrorMessage('');
  
      } else {
        setErrorMessage(data.message);
        alert('The text can not be converted into a image')
      }
    } catch (err) {
      setErrorMessage(err.message);
      alert('Sorry! Try again')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text:
        <input type="text" value={text} placeholder= 'enter text to get the related image' onChange={(e) => setText(e.target.value)} required />
      </label>
      <label>
        Format:
        <input type="text" value={format} placeholder= 'enter image format such as png , jpg, etc' onChange={(e) => setFormat(e.target.value)}  required/>
      </label>
      <label>
        Width:
        <input type="text" value={width} placeholder= 'enter image width in range between 1 to 5000' onChange={(e) => setWidth(e.target.value)}  required/>
      </label>
      <label>
        Height:
        <input type="text" value={height} placeholder= 'enter image width in range between 1 to 5000' onChange={(e) => setHeight(e.target.value)} required/>
      </label>
      <button type="submit">Generate</button>
      <h3>95% we are able to generate the related images from the text.</h3>
      
      {errorMessage && <p>Sorry!! Try again </p>}
      {imageUrl && <img src={imageUrl} alt={text}/>}
    </form>
  );
}

export default AddTextForm;




















