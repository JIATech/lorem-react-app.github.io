import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="lorem__navbar">
      <div className="lorem__navbar-links">
        <div className="lorem__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="lorem__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wlorem">What is Lorem?</a>
          </p>
          <p>
            <a href="#possibility">Lorem Ipsum</a>
          </p>
          <p>
            <a href="#features">Lorem Studies</a>
          </p>
          <p>
            <a href="#blog">Lorems</a>
          </p>
        </div>
      </div>
      <div className="lorem__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="lorem__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="lorem__navbar-menu_container scale-up-center">
            <div className="lorem__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wlorem">What is lorem?</a>
              </p>
              <p>
                <a href="#possibility">Lorem Ipsum</a>
              </p>
              <p>
                <a href="#features">Lorem Studies</a>
              </p>
              <p>
                <a href="#blog">Lorems</a>
              </p>
            </div>
            <div className="lorem__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
