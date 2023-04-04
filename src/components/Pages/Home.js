import React from 'react';
import user from "../images/programmer.png"

function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="intro">
          <div className="text">Hi I'm Saurbha Kumar Rai</div>
        </div>
        <div className="intro2">
          <div className="text">Full Stack MERN <div> Developer</div></div>
        </div>
        <div className="button">
          <a href="#bottom">Get In Touch</a>
        </div>
      </div>
      <img className="image" src={user} alt="Hello" />
    </div>
  );
}

export default Home;
