import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalsList from '../FestivalsList/FestivalsList';

class UserPage extends Component {
  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }

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
        {this.props.user.id === 1 
          ?
          <h2 style={{ textAlign: 'center' }} className="tagline">Active Festivals</h2>
          :
          <h2 style={{ textAlign: 'center' }} className="tagline">All Festivals</h2>
        }
        <hr />
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

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  festivals: state.festivals,
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

