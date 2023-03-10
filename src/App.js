import React from "react";
import Navbar from "./Components/Navbar";
import Footbar from "./Components/Footbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="content">
        <div class="content-info">
          <h2>Hello World!</h2>
          <p>I am,</p>
          <h1>Subhransu Sekhar Rath</h1>
          <p>Engineer</p>
          <a href="page/about.html">Learn More</a>
          <a href="page/contact.html">Get in Touch</a>
        </div>
        <div class="img-box">
          <img src="img/devimg.jpeg" alt="Subhransu" />
        </div>
      </div>
      <Footbar />
    </div>
  );
}

export default App;
