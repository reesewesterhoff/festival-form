import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserNav = (props) => (
  <div className="nav">
    {/* ask??? */}
    <Link to="/adminhome">
    </Link>
    <div>
      {props.user.id === 1 && (
        <div>
          <Link className="nav-link" to="/adminhome">
            Admin Home
      </Link>
          <Link className="nav-link" to="/createfest">
            Create Festival
      </Link>
          <Link className="nav-link" to="/festresponse">
            Fest Responses
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
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/festivaldetail">
            Detailed Festival
          </Link>
          <Link className="nav-link" to="/tourinfo">
            My Tour Info
          </Link>
        </>
      )}
      {/* <h3>moment().format('MMMM Do YYYY, h:mm:ss a');</h3> */}
      {/* Always show this link since the about page is not protected */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserNav);
