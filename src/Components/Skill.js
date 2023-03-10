import React from "react";
import Footbar from "./Footbar";
import Navbar from "./Navbar";
import "./Skill.css";

function Skill() {
  return (
    <div>
      <Navbar />
      <div class="my-skill">
        <div class="skill-box">
          <div class="skill">
            <h3>JavaScript</h3>
            <div class="js-bar bar">
              <p class="bar-text">80%</p>
            </div>
          </div>

          <div class="skill">
            <h3>ReactJS</h3>
            <div class="react-bar bar">
              <p class="bar-text">60%</p>
            </div>
          </div>

          <div class="skill">
            <h3>HTML</h3>
            <div class="html-bar bar">
              <p class="bar-text">90%</p>
            </div>
          </div>

          <div class="skill">
            <h3>CSS</h3>
            <div class="css-bar bar">
              <p class="bar-text">80%</p>
            </div>
          </div>

          <div class="skill">
            <h3>MySQL</h3>
            <div class="mysql-bar bar">
              <p class="bar-text">70%</p>
            </div>
          </div>

          <div class="skill">
            <h3>Git and Github</h3>
            <div class="git-bar bar">
              <p class="bar-text">70%</p>
            </div>
          </div>
        </div>
      </div>

      <span class="menu-icon" id="toggle" onclick="menuToggle()"></span>
      <Footbar />
    </div>
  );
}

export default Skill;
