import React from "react";
import "./Footbar.css";

function Footbar() {
  return (
    <div className="footerbar">
      <nav>
        <ul className="social-link">
          <li className="copy">
            <p>Copyright &copy; 2022</p>
          </li>
          <li>
            <a href="tel:917894655185">call</a>
          </li>
          <li>
            <a href="mailto:ssrath38@gmail.com">mail</a>
          </li>
          <li>
            <a href="https://github.com/Subhransu38">Git</a>
          </li>
          <li>
            <a href="https://wa.me/917894655185">WP</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footbar;
