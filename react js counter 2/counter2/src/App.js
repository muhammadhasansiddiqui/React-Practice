import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Define the effect to log count and play audio when count reaches 10
  useEffect(() => {
    console.log(count, "count");
    if (count === 10) {
      // Play audio when count is 10
      const audio = new Audio('path/to/your/audio/file.mp3'); // Update with the actual path to your audio file
      audio.play();
    }
  }, [count]);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className='main'>
      <div className='main2'>
        <p className='para1'>{count}</p>
        <button onClick={incrementCount}> + </button>
        <button onClick={decrementCount}> - </button>
      </div>
    </div>
  );
}

export default App;
