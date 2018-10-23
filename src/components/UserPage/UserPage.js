import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import FestivalsList from '../FestivalsList/FestivalsList';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ALL_FESTIVALS'});
    this.props.dispatch({type: 'FETCH_BAND_INFO', payload: this.props.user.id});
    console.log('user id userpage', this.props.user.id);
    
  }


  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.first_name }!
        </h1>
        <br />
        <h2>All Festivals</h2>
       <FestivalsList 
          id={this.props.user.id}
       />
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" />
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

