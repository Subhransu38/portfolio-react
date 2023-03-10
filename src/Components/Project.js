import React from "react";
import "./Project.css";
import Navbar from "./Navbar";
import Footbar from "./Footbar";

function Project() {
  return (
    <div>
      <Navbar />
      <div className="my-project">
        <div className="project-box">
          <div className="project food">
            <h3>ODIA FOOD PARADISE</h3>
            <p className="project-detail">
              Food Ordering Website <br /> Technologies Used: ReactJS, HTML, CSS
            </p>
            <a
              className="project-link"
              href="https://subhransu38.github.io/portfolio/"
            >
              <b>Click Here</b> to Order Your Meal
            </a>
          </div>

          <div className="project portfolio">
            <h3>PORTFOLIO WEBSITE</h3>
            <p className="project-detail">
              Personal Portfolio Website <br /> Technologies Used: HTML, CSS,
              JavaScript
            </p>
            <a
              className="project-link"
              href="https://subhransu38.github.io/portfolio/"
            >
              <b>Click Here</b> to Visit the Website
            </a>
          </div>

          <div className="project utube">
            <h3>YOUTUBE 2.0</h3>
            <p className="project-detail">
              Responsive YouTube Clone <br /> Technologies Used: HTML, CSS,
              JavaScript
            </p>
            <a
              className="project-link"
              href="https://subhransu38.github.io/portfolio/"
            >
              <b>Click Here</b> to Watch Videos
            </a>
          </div>

          <div className="project expense">
            <h3>EXPENSE TRACKER</h3>
            <p className="project-detail">
              Expense Tracker Website <br /> Technologies Used: ReactJS, HTML,
              CSS
            </p>
            <a
              className="project-link"
              href="https://subhransu38.github.io/portfolio/"
            >
              <b>Click Here</b> to Visit the Website
            </a>
          </div>

          <div className="project game">
            <h3>2048 GAME</h3>
            <p className="project-detail">
              2D Single Player Game
              <br /> Technologies Used: JavaScript, HTML, CSS
            </p>
            <a
              className="project-link"
              href="https://subhransu38.github.io/portfolio/"
            >
              <b>Click Here</b> to Play the Game
            </a>
          </div>
        </div>
      </div>
      <span className="menu-icon" id="toggle" onclick="menuToggle()"></span>
      <Footbar />
    </div>
  );
}

export default Project;
