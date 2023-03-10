import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footbar from "./Footbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="detail-box">
        <div className="detail-info">
          <div className="about-img">
            <img src="img/devimg.jpeg" alt="Subhransu" />
          </div>
          <div className="info-area">
            <h1 className="h1-heading">Subhransu Sekhar Rath</h1>
            <p>
              <b>DOB :</b> 30<superscript>th</superscript> May 1999
            </p>
            <p>
              <b>Hobbies :</b> Travel, Cooking
            </p>
            <p>
              <b>Languages :</b> English, Odia, Hindi
            </p>
            <a href="other/subhransu-resume.pdf">Download CV</a>
            <a
              className="certificate-btn"
              href="https://drive.google.com/drive/folders/1wDrawTFLFeowVaagW4Cw3gtrfJNSel1r?usp=sharing"
            >
              Certificates
            </a>
          </div>
          <div className="certificate">
            <img src="img/certificate.png" alt="Certificates" />
            <p>
              <b>Scan to Get my Certificates</b>
            </p>
          </div>
        </div>
        <div className="education">
          <h1 className="h1-heading">EDUCATION</h1>
          <h2>Bachelor of Technology in Computer Science and Engineering</h2>
          <h3>
            Centurion University of Technology and Management, Paralakhemundi,
            Odisha
          </h3>
          <p>
            <b>7.99 CGPA</b>
          </p>
          <p>2016 - 2020</p>
          <hr />
          <h2>Senior-Secondary (+2)</h2>
          <h3>Gayatri Junior College, Berhampur, Ganjam (CHSE ODISHA)</h3>
          <p>
            <b>54.12%</b>
          </p>
          <p>2014 - 2016</p>
          <hr />
          <h2>
            Secondary (10<superscript>th</superscript>)
          </h2>
          <h3>Govt. N.A.C. High School, Aska, Ganjam (BSE ODISHA)</h3>
          <p>
            <b>73.5%</b>
          </p>
          <p>April 2014</p>
          <hr />
          <h2>React- The Complete Guide (incl Hooks, React Router, Redux)</h2>
          <h3>Instructors: Academind by Maximilian Schwarzmuller</h3>
          <p>
            <b>Udemy</b>
          </p>
          <p>February 2023</p>
        </div>
      </div>
      <span className="menu-icon" id="toggle" onclick="menuToggle()"></span>
      <Footbar />
    </div>
  );
}

export default About;
