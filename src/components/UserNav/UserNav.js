import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Time from '../Time/Time';

const UserNav = (props) => (
  <div className="nav">
    <div>
      {/* only display admin links if user id is 1 (me) */}
      {props.user.id === 1 && (
        <div>
          <Link className="nav-link" to="/adminhome">
            Admin Home
          </Link>
          <Link className="nav-link" to="/createfest">
            Create Festival
          </Link>
        </div>
      )}
    </div>
    <Link to="/home">
    </Link>
    <div>
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the tour info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/tourinfo">
            My Tour Info
          </Link>
        </>
      )}
      <div>
        {/* display current time component whether user is logged in or not */}
        <Time />
      </div>
    </div>
  </div>
);



// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserNav);
