import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function BottomAbout() {
  const [state, handleSubmit] = useForm("mgedkwky");
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  if (state.succeeded) {
    return <p className="center">Thanks for chatting</p>;
  }
  return (
    <div id="bottom" className="Bottom">
      <div className="free">
        <div className="txthead">Let's Connect</div>
        <div className="txt">
          Have an exciting project or idea ?
          <div className="contsmes">
            <div className="socialLinks">
              <ul className="git_port">
                <li onClick={closeMobileMenu}>
                  <a className="git"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/saurabhchanchal"
                  >
                    <FaGithubSquare/>
                  </a>
                </li>
                <li onClick={closeMobileMenu}>
                  <a
                  className="port"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/saurabha-rai-b83376233/"
                  >
                    <FaLinkedin  />
                  </a>
                </li>
              </ul>
            </div>
            Phone Number : +919267930675 <br />
            Email : saurabh100rab69@gmail.com <br />
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
              <input type="text" name="name" id="name" placeholder="Name" />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              minLength={20}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BottomAbout;
