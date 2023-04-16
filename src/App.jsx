import './App.css'

function App() {
  return (
    <div>
      <div className="stepper-container">
        {/* break control section start */}
        <div className="stepper">
          <label id="break-label" className="label">Break Length</label>
          <div id="break-decrement" className="decrement"><i className="fa-solid fa-arrow-down"></i></div>
          <div id="break-length" className="length">5</div>
          <div id="break-increment" className="increment"><i className="fa-solid fa-arrow-up"></i></div>
        </div>
        {/* break control section end */}
        {/* session control section start */}
        <div className="stepper">
          <label id="session-label" className="label">Session Length</label>
          <div id="session-decrement" className="decrement"><i className="fa-solid fa-arrow-down"></i></div>
          <div id="session-length" className="length">25</div>
          <div id="session-increment" className="increment"><i className="fa-solid fa-arrow-up"></i></div>
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
        <div id="start-stop"><i class="fa-solid fa-play"></i></div>
        <div id="reset"><i class="fa-solid fa-rotate-left"></i></div>
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
