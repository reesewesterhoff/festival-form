import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ALL_FESTIVALS'});
  }


  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1>
       <FestivalsList />
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" />
        <pre>
          {JSON.stringify(this.props.state)}
        </pre>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  festivals: state.festivals,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

