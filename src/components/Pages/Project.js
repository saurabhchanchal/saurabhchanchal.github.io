import React from 'react'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'
import bestBuy from "../images/bestBuy.png"
import fraazo from "../images/fraazo.png"
// import githubhero from "../images/Mini Github.png"
import ApploImg from "../images/ApploImg.png"
// import grubhero from "../images/GrubHub Hero.png"

function Project() {
    return (
        <div className="Project" id='projectDiv'>
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
  

               
                 <div className="projs">
                    <div className="img">
                        <img src={fraazo} alt="movies" />
                    </div>
                    <div className="title">
                       Fraazo Clone
                    </div>
                    <div className="projinfo">
                    A web application to buy groceries online in India.<br/>
                    <br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage 
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://fraazo-clone-project.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/saurabhchanchal/web-15-fraazo" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>

                 {/* project three */}
                 <div className="projs">
                    <div className="img pharm">
                        <img src={bestBuy}autoCapitalize alt="movies" />
                    </div>
                    <div className="title">
                       bestBuy Clone
                    </div>
                    <div className="projinfo">
                    A web application to buy electronic product online in India.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage | MongoDb | Express | Mongoose | NPM | Heroku |  etc.
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                    
                        <a href="https://merry-kitten-8e2680.netlify.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/paruljamwal/Backend-best-buy-repo" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                 {/* project four */}
                 <div className="projs">
                    <div className="img">
                        <img src={ApploImg} alt="movies" />
                    </div>
                    <div className="title">
                    Apollo-247 Clone
                    </div>
                    <div className="projinfo">
                    Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://quirky-neumann-18c833.netlify.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/SakethReddy1111/Apollo-247" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/saurabhchanchal" target={"_blank"}><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div>
    )
}

export default Project
