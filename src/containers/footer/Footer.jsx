import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="lorem__footer section__padding">
    <div className="lorem__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the lorem before ipsum
      </h1>
    </div>

    <div className="lorem__footer-btn">
      <p>Request Lorem Access</p>
    </div>

    <div className="lorem__footer-links">
      <div className="lorem__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          JIATech, <br /> All Rights Reserved
        </p>
      </div>
      <div className="lorem__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="lorem__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="lorem__footer-links_div">
        <h4>Get in touch</h4>
        <p>La Plata, Buenos Aires, Argentina</p>
        <p>221-6908850</p>
        <p>arnaboldi.juan@gmail.com</p>
      </div>
    </div>

    <div className="lorem__footer-copyright">
      <p>@2024 Lorem. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
