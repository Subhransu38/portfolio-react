import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul class="nav-bar">
          <li>
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/skill">
              SKILL
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/project">
              PROJECT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
