import React from "react";
import Logo from "../Assets/logoPucMinas.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>1362335@sga.pucminas.com</span>
          <span>1362330@sga.pucminas.br</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
