import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Travel. But don't neglect the environment.</h1>
        <h4>Use our calculator for your leisure and business trips and make a difference.</h4>
      </div>
      <div>
        <h4>Contact us</h4>
        <h5>+359 89 995 9115</h5>
        <h6>lyuben.tenekedjiev@gmail.com</h6>
        <div className="FooterIcons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
