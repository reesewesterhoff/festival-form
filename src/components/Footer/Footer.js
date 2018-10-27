import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const styles = {
  footer: {
    width: '100%',
    margin: 'auto',
  },
  link: {
    margin: 30,
    color: 'black',
  },
};



function Footer(props) {

  const { classes } = props;

  return(
  <>
    <hr />
    <footer className={classes.footer}>
      <Link className={classes.link} to="/home">
        Home
      </Link>
      <Link className={classes.link} to="/info">
        Info
      </Link>
      <Link className={classes.link} to="/about">
        About
      </Link>
      <Link className={classes.link} to="/tourinfo">
        My Tour Info
      </Link>
    </footer>
    <hr />
  </>
);
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
