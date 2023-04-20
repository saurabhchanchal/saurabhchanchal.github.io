import React from "react";
import profile from "../images/saurabhprofile.png";

function About() {
  return (
    <div>
      <div className="aboutmeintro" id="aboutDiv">
        A short introduction about me
      </div>
      <div className="About">
        <div className="abouttext">
          <div className="headtext">
            I am Saurabha Kumar Rai,
            <div>A Full Stack MERN Developer</div>
          </div>
          <div className="details">
            A highly dedicated and passionate full-stack web developer with
            excellent administrative and communication skills and the ability to
            write efficient code. Looking forward to an exciting opportunity in
            a challenging role as a full-stack developer.
          </div>
          <div className="more">
            I have expertise in HTML, CSS, and JavaScript. Additionally, I have
            experience and considerable knowledge about ES6, React and Git.
          </div>
          <br />
          <div className="more " >
            <div className="headtext">Education</div>
            <div className="eduFlex">
            <div className="details edu">
              <p>Full Stack Web Developer</p>
              <p>Masai School, Bengaluru</p>
              <p>Sept 2021 - Present</p>
            </div>

            <div className="details edu edu2">
              <p>BE Mechanical Engineering</p>
              <p>Acharya Institutes of Technology, Bengaluru</p>
              <p>Aug 2013 - 2017</p>
            </div>
            </div>
            
          </div>
        </div>
        <div className="imageme">
          <img src={profile} alt="Allan" height="350" width="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
