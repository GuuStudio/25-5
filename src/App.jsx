import './App.css'

function App() {
  return (
    <div>
      <label id="break-label">Break Length</label>
      <label id="session-label">Session Length</label>
      <div id="break-decrement"><i className="fa-solid fa-arrow-down"></i></div>
      <div id="session-decrement"><i className="fa-solid fa-arrow-down"></i></div>
      <div id="break-increment"><i className="fa-solid fa-arrow-up"></i></div>
      <div id="session-increment"><i className="fa-solid fa-arrow-up"></i></div>
      <div id="break-length">5</div>
      <div id="session-lenght">25</div>
      <div id="timer-label">Session</div>
      <div id="time-left">mm:ss</div>
      <div id="start-stop"><i class="fa-solid fa-play"></i></div>
      <div id="reset"><i class="fa-solid fa-rotate-left"></i></div>
    </div>
  )
}

export default App
