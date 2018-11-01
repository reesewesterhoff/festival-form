import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalsList from '../FestivalsList/FestivalsList';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

  // get users band info and a list of all festivals from the database on home page load
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ALL_FESTIVALS' });
    this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
  }


  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.first_name}
        </h1>
        <br />
        <hr />
        {/* display "active festivals" if the user is admin (id=1) */}
        {this.props.user.id === 1 
          ?
          <h2 style={{ textAlign: 'center' }} className="tagline">Active Festivals</h2>
          :
          <h2 style={{ textAlign: 'center' }} className="tagline">All Festivals</h2>
        }
        <hr />
        {/* list of all festivals on cards */}
        <FestivalsList
          id={this.props.user.id}
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user and festivals info
const mapStateToProps = state => ({
  festivals: state.festivals,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

