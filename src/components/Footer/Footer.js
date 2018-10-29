import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const styles = {
//   footer: {
//     width: '100%',
//     margin: 'auto',
//   },
//   link: {
//     margin: 30,
//     color: 'black',
//   },
// };



function Footer() {


  return (
    <>
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
