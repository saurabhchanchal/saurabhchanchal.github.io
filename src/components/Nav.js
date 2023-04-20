import React, { useState } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import  Saurabh from "./resume/Saurabh.pdf";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const downloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Saurabh
    downloadLink.download = "Saurabha_Rai_Resume.pdf";
    downloadLink.click();
    window.open(
      "https://drive.google.com/file/d/1gzUX5QYyHyALRCl5ho4yoY6FIMCLpgq6/view?usp=share_link"
    );
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">{"<Saurabha/>"}</div>
      </Link>
      <div className={click ? "menu active" : "menu"}>
        <ul className="navvs">
          <li onClick={closeMobileMenu}>
            <a href="#aboutDiv"> About</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#techStack">Skills</a>{" "}
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#projectDiv">Projects</a>{" "}
          </li>

          <li onClick={closeMobileMenu}>
            {" "}
            <a href="#bottom">Contact</a>{" "}
          </li>

          <li className="navvs">
            <a onClick={downloadResume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <div className="socials">
          <ul>
            <li className="resumes" onClick={closeMobileMenu}></li>
            <li onClick={closeMobileMenu}>
              <a
                title="saurabh100rab69@gmail.com"
                target="_blank"
                rel="noreferrer"
                href="mailto:saurabh100rab69@gmail.com"
              >
                <FaEnvelope />{" "}
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/saurabhchanchal"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/saurabha-rai-b83376233/"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
