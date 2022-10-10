import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";

const FooterComponent = () => (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/">
          <FaInstagram className = "text-danger" size="57"   color="#fff"/>
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube className = "text-danger" size="57"  />
        </a>  
        <a href="https://www.youtube.com/">
          <FaFacebook className = "text-danger" size="57"  />
        </a>  
      </div>
      <p className="footer__copyright text-white" >Sports Mosquera 2022</p>
    </footer>
);

export default FooterComponent;