import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
    {/* links to all user pages */}
      <footer className="footer">
        <span className="span" id="span">
          <Link to="/home">
            Home
          </Link>
        </span>
        <span className="span">
          <Link to="/info">
            Info
          </Link>
        </span>
        <span className="span"> 
          <Link to="/about">
            About
          </Link>
        </span>
        <span className="span">
          <Link to="/tourinfo">
            My Tour Info
          </Link>
        </span>
      </footer>
    </>
  );
}


export default Footer;
