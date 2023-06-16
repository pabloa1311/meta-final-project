import React from "react";
import "../styles/Footer.css";
import image from "../icons_assets/Mario and Adrian A.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <img src={image} alt="Our waiters" />
      <div className="footer__nav">
        <h3>Navigation</h3>
        <div className="footer__navItems">
          <ul>
            <li>Menu</li>
            <li>About Us</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <div className="footer__navItems">
          <ul>
            <li>Adress:</li>
            <li>Mail:</li>
            <li>Telephone:</li>
          </ul>
        </div>
      </div>
      <div className="footer__socialMedia">
        <h3>Our Social Media</h3>
        <div className="footer__socialItems">
          <ul>
            <li><TwitterIcon /></li>
            <li><InstagramIcon/></li>
            <li><FacebookIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
