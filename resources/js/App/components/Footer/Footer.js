import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <h2>Travel. But don't neglect the environment.</h2>
        <h5>Use our calculator for your leisure and business trips and make a difference.</h5>
      </div>
      <div className="Contact">
        <h4>Contact us</h4>
      </div>
      <div className="ContactInfo">
        <div className="ContactPerson">
          <h5>Lyuben Tenekedzhiev</h5>
          <a href="mailto:lyuben.tenekedjiev&#64;gmail.com">
            <h6>
              lyuben.tenekedjiev<code>&#64;</code>gmail.com
            </h6>
          </a>
          <div className="FooterIcons">
            <a href="https://github.com/LyubenTenekedzhiev">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/lyuben-tenekedzhiev/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        {/* <div className="ContactPerson">
          <h5>Diogo Soares Silva</h5>
          <a href="mailto:diogo.soares.silva&#64;gmail.com">
            <h6>
              diogo.soares.silva<code>&#64;</code>gmail.com
            </h6>
          </a>
          <div className="FooterIcons">
            <a href="https://soaresilva.eu">
              <HomeIcon />
            </a>
            <a href="https://github.com/soaresilva">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/diogossilva/">
              <LinkedInIcon />
            </a>
          </div>
        </div> */}
        {/* <div className="ContactPerson">
          <h5>Gabrielle Wildfeuer</h5>
          <a href="mailto:gpwildfeuer&#64;email.wm.edu">
            <h6>
              gpwildfeuer<code>&#64;</code>email.wm.edu
            </h6>
          </a>
          <div className="FooterIcons">
            <a href="https://github.com/piedaddy">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/gabrielle-wildfeuer/">
              <LinkedInIcon />
            </a>
          </div>
        </div> */}
      </div>
      <a href="https://github.com/soaresilva/cfc">
        <p>View our code on GitHub</p>
      </a>
    </div>
  );
}

export default Footer;
