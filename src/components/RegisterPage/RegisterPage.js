import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

class RegisterPage extends Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <br />
          <div>
              <TextField
                type="text"
                label="Username"
                variant="outlined"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <br />
          <div>
              <TextField
                type="text"
                label="First Name"
                variant="outlined"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
          </div>
          <br />
          <div>
              <TextField
                type="text"
                label="Last Name"
                variant="outlined"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
          </div>
          <br />
          <div>
              <TextField
                type="text"
                label="Email"
                variant="outlined"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
          </div>
          <br />
          <div>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div>
          <br />
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

