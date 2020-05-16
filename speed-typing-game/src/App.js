import React from 'react';
import './App.css';
import useWordGame from "./hooks/useWordGame"

function App() {
  const {
    text, 
    isGameStarted, 
    textareaRef, 
    timeRemaining, 
    wordCount,
    handleChange, 
    startGame
  } = useWordGame()

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea 
        value={text} 
        onChange={handleChange}
        disabled={!isGameStarted}
        ref={textareaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame} 
        disabled={isGameStarted}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
