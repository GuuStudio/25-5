import { useState } from 'react';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  function decrementBreakLength() {
    if (breakLength !== 1) {
      setBreakLength(breakLength - 1);
    }
  }

  function incrementBreakLength() {
    if (breakLength !== 60) {
      setBreakLength(breakLength + 1);
    }
  }

  function decrementSessionLength() {
    if (sessionLength !== 1) {
      setSessionLength(sessionLength - 1);
    }
  }

  function incrementSessionLength() {
    if (sessionLength !== 60) {
      setSessionLength(sessionLength + 1);
    }
  }

  return (
    <div id="wrapper">
      <h1 id="main-header">25 + 5 Clock</h1>
      <div className="stepper-container">
        {/* break control section start */}
        <div className="stepper">
          <label id="break-label" className="label">Break Length</label>
          <div id="break-decrement" className="decrement" onClick={decrementBreakLength}><i className="fa-solid fa-arrow-down"></i></div>
          <div id="break-length" className="length">{breakLength}</div>
          <div id="break-increment" className="increment" onClick={incrementBreakLength}><i className="fa-solid fa-arrow-up"></i></div>
        </div>
        {/* break control section end */}
        {/* session control section start */}
        <div className="stepper">
          <label id="session-label" className="label">Session Length</label>
          <div id="session-decrement" className="decrement" onClick={decrementSessionLength}><i className="fa-solid fa-arrow-down"></i></div>
          <div id="session-length" className="length">{sessionLength}</div>
          <div id="session-increment" className="increment" onClick={incrementSessionLength}><i className="fa-solid fa-arrow-up"></i></div>
        </div>
        {/* session control section end */}
      </div>
      {/* timer section start */}
      <div id="timer-section">
        <div id="timer-label">Session</div>
        <div id="time-left">mm:ss</div>
      </div>
      {/* timer section end */}
      {/* timer control section */}
      <div id="timer-controls">
        <div id="start-stop"><i className="fa-solid fa-play"></i></div>
        <div id="reset"><i className="fa-solid fa-rotate-left"></i></div>
      </div>
      {/* timer control section end */}
      <Contact />
    </div>
  )
}

export default App

function Contact() {
  return (
      <div id="contact-section">by <a target="_blank" href="https://github.com/anandxs">Anand S</a></div>
  );
}
