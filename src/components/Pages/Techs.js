import React from 'react';
//import { FaAngleRight } from 'react-icons/fa';
import jsicon from "../images/javascript.svg"
import  reacticon from "../images/create-react-app.svg"
import expressicon from "../images/express.svg"
import mongodbicon from "../images/mongodb.svg"
import npmicon from "../images/npm.svg"
import git from "../images/git-icon.svg"
import nodeicon from "../images/nodejs-icon.svg"
import redux from "../images/redux.svg"
import vscode from "../images/visual-studio-code.svg"
import html from "../images/html-5.svg";
import css from "../images/css-3.svg"
import materialUI from "../images/material-ui.svg"



function Techs() {
  return (
    <div className="Tech" id="techStack">
      <div className="techstacks">
        <div className="intro">
          Tech Stacks and Tools that I've been working with
        </div>
        <div className="techs"  >
          <div className='techImg'>
            <img src={html} alt=""  />
            <p>HTML 5</p>
          </div>
          <div className='techImg'>
            <img src={css} alt=""  />
            <p>CSS 3</p>
          </div>
          <div className='techImg'>
            <img src={jsicon} alt=""  />
            <p>JavaScript</p>
          </div>
          <div className='techImg'>
            <img src={mongodbicon} alt=""  />
            <p>MongoDb</p>
          </div>
          <div className='techImg'>
            <img src={npmicon} alt=""  />
            <p>NPM</p>
          </div>
          <div className='techImg'>
            <img src={nodeicon} alt=""  />
            <p>Node Js</p>
          </div>
          <div className='techImg'>
            <img src={expressicon} alt=""  />
            <p>Express</p>
          </div>
          <div className='techImg'>
            <img src={reacticon} alt=""  />
            <p>React</p>
          </div>
          <div className='techImg'>
            <img src={materialUI} alt=""  />
            <p>Material Ui</p>
          </div>
          <div className='techImg'>
            <img src={redux} alt=""  />
            <p>Redux</p>
          </div>
          <div className='techImg'>
            <img src={vscode} alt=""  />
            <p>Vs Code</p>
          </div>
          <div className='techImg'>
            <img src={git} alt=""  />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
