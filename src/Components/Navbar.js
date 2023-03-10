import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul class="nav-bar">
          <li>
            <a className="nav-link" href="index.html">
              HOME
            </a>
          </li>
          <li>
            <a className="nav-link" href="about.html">
              ABOUT
            </a>
          </li>
          <li>
            <a className="nav-link" href="skills.html">
              SKILL
            </a>
          </li>
          <li>
            <a className="nav-link" href="projects.html">
              PROJECT
            </a>
          </li>
          <li>
            <a className="nav-link" href="contact.html">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
