import React from "react";
import BottomAbout from "../BottomAbout";
import { FaGithub } from "react-icons/fa";
import bestBuy from "../images/bestBuy.png";
import MasaiPlatform from "../images/MasaiPlatform.png";
import Gradigi from "../images/Gradigi.png";
import ApploImg from "../images/ApploImg.png";
import GitHubCalendar from "react-github-calendar";

function Project() {
  return (
    <div className="Project" id="projectDiv">
      <div className="head">
        My Projects
        <div className="projectsIntro">
          <div>Here are some of the projects that I have done</div>
        </div>
      </div>
      <div className="container">
        {/*------------------------ Project One----------------------------------- */}
        <div className="projs">
          <div className="img">
            <img src={MasaiPlatform} alt="movies" />
          </div>
          <div className="title">Masai Platform</div>
          <div className="projinfo">
            We are building a new entity by the name “Masai Learn” incorporated
            to masai website domain to boost SEO ranking & organic traffic. It
            would comprise Tutorials on different topics (for example-
            JavaScript, SQL, Python, etc).
            <br />
            <br />
            Tech Stack: HTML | CSS | Javascript | React | Postman | Chakra-UI
          </div>
          <div className="flex">
            <div className="projlinks">
              <a href="https://www.masaischool.com/learn/tutorials" target={"_blank"}>
                Live
              </a>
            </div>
          </div>
        </div>

        {/* -----------------------------Project Two------------------------------ */}
        <div className="projs">
          <div className="img">
            <img src={Gradigi} alt="movies" />
          </div>
          <div className="title">Gradigi</div>
          <div className="projinfo">
            Gradigi is a web-based platform designed to assist in grading live
            presentations and interviews. The platform has two roles, Admin and
            User, each with specific features.
            <br />
            <br />
            Tech Stack: HTML | CSS | Javascript | React | Postman | Material-UI
            | MySql | Springboot
          </div>
          <div className="flex">
            <div className="projlinks">
              <a href="http://35.178.251.86:8080/" target={"_blank"}>
                Live
              </a>
            </div>
          </div>
        </div>

        {/* project three */}
        <div className="projs">
          <div className="img pharm">
            <img src={bestBuy} autoCapitalize alt="movies" />
          </div>
          <div className="title">BestBuy Project</div>
          <div className="projinfo">
            Best Buy is a consumer electronics retailer with operations in the
            U.S., Mexico, and Canada. At its brick-and-mortar locations and
            online, the company sells a wide variety of items, including mobile
            phones.
            <br />
            <br />
            Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage | MongoDb |
            Express | Mongoose | NPM | Heroku | etc.
          </div>
          <div className="flex">
            <div className="projlinks">
              <a
                href="https://roaring-cassata-209e07.netlify.app/"
                target={"_blank"}
              >
                Live
              </a>
            </div>
            <div className="projlinks">
              <a
                href="https://github.com/saurabhchanchal/Backend-best-buy-repo"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* project four */}
        <div className="projs">
          <div className="img">
            <img src={ApploImg} alt="movies" />
          </div>
          <div className="title">Apollo-247 Project</div>
          <div className="projinfo">
            Apollo 24|7 is a single online platform where you have access to a
            wide range of services such as online pharmacy, online doctor
            consultations, and diagnostic lab tests at home.
            <br />
            <br />
            Tech Stack: HTML | CSS | Javascript | DOM
          </div>
          <div className="flex">
            <div className="projlinks">
              <a
                href="https://quirky-neumann-18c833.netlify.app/"
                target={"_blank"}
              >
                Live
              </a>
            </div>
            <div className="projlinks">
              <a
                href="https://github.com/SakethReddy1111/Apollo-247"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="moreprojs">
        <div>For more You can view my github</div>
        <div>
          <a href="https://github.com/saurabhchanchal" target={"_blank"}>
            <FaGithub /> Github
          </a>
        </div>
      </div>

      {/* /calander and stacks */}
      <div className="calander">
        <div className="cal">
          <GitHubCalendar
            style={{ backgroundColor: "transparent" }}
            username="saurabhchanchal"
            colorScheme="light"
          />
        </div>
        <div className="stacks">
          {" "}
          <p>
            <img
              align="left"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=saurabhchanchal&show_icons=true&locale=en&layout=compact"
              alt="saurabhchanchal"
            />
          </p>
          <p>
            &nbsp;
            <img
              className="stats"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=saurabhchanchal&show_icons=true&locale=en"
              alt="saurabhchanchal"
            />
          </p>
        </div>
      </div>

      <BottomAbout />
    </div>
  );
}

export default Project;
