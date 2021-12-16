import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import Container from 'react-bootstrap/Container'



function App() {
  return (
    <Container className="App">
      <header className="App-header container justify-content-center">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </Container>
  );
}

export default App;
