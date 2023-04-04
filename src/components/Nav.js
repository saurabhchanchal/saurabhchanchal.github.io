import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  // FaTwitterSquare,
  //dagde
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <Link to='/'>
      <div className="logo">{'<Saurabha/>'}</div>
      </Link>
      <div className={click ? 'menu active' : 'menu'}>
        <ul className="navvs">
          <li onClick={closeMobileMenu}><a href="#aboutDiv"> About</a></li>
          <li onClick={closeMobileMenu}><a href="#techStack">Skills</a> </li>
          <li onClick={closeMobileMenu}><a href="#projectDiv">Projects</a> </li>

          <li onClick={closeMobileMenu}> <a href="#bottom">Contact</a> </li>

          <li className="navvs" onClick={closeMobileMenu}>
            <a target="_blank" rel="noreferrer" href={"https://drive.google.com/file/d/17-aIEy7eq4slHfBBSnvzY4C80CXEMLVw/view?usp=sharing"}>
              Resume
            </a>
          </li>
        </ul>
        <div className="socials">
          <ul>
            <li className="resumes" onClick={closeMobileMenu}>
              {/* <Link to='/blog'>
                <div>Blogs</div>
              </Link> */}
            </li>
            <li onClick={closeMobileMenu}>
              <a title='saurabh100rab69@gmail.com'
                target="_blank"
                rel="noreferrer"
                href="mailto:saurabh100rab69@gmail.com"
              >
                <FaEnvelope />{' '}
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
// menu
