// import react
import React, { Component } from 'react';

// connect to redux state
import { connect } from 'react-redux';

// material-ui imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from '../SnackBar/SnackBar';


class CreateFestForm extends Component {

    // define state
    state = {
        name: '',
        date: '',
        address: '',
        image: '',
    }

    // handle changes in TextFields (curry)
    handleChangeFor = propertyName => event => {
        this.setState({
            // saves whatever state previously was and only changes current TextField
            ...this.state,
            [propertyName]: event.target.value
        });
    }; // end handleChangeFor

    // handle form submission
    handleSubmit = (event) => {
        // prevent page refresh
        event.preventDefault();
        // dispatch CREATE_FESTIVAL action to festivalSaga with the current state
        this.props.dispatch({ type: 'CREATE_FESTIVAL', payload: this.state });
        // set inputs back to empty strings
        this.setState({
            name: '',
            date: '',
            address: '',
            image: '',
        });
    }; // end handleSubmit


    render() {
        return (
            <div className="inputDiv">
                {/* on pressing enter the form is submitted and festival creation action dispatched */}
                <form onSubmit={this.handleSubmit}>
                    <h1 className="tagline">Create New Festival</h1>
                    <p className="tagline">Please enter some information about this festival.</p>
                    <br />
                    {/* text fields handle all admin input when creating a new festival, all fields must be filled to submit the form */}
                    <TextField
                        type="text"
                        label="Festival Name"
                        variant="outlined"
                        value={this.state.name}
                        required
                        onChange={this.handleChangeFor('name')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="date"
                        variant="outlined"
                        value={this.state.date}
                        required
                        onChange={this.handleChangeFor('date')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="text"
                        label="Address"
                        variant="outlined"
                        value={this.state.address}
                        required
                        onChange={this.handleChangeFor('address')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="text"
                        label="Photo Url"
                        variant="outlined"
                        value={this.state.image}
                        required
                        onChange={this.handleChangeFor('image')}
                    />
                    <br />
                    <br />
                    <br />
                    <SnackBar 
                        buttonText="Create Festival"
                        message="Festival created successfully!"
                    />
                </form>
            </div>
        );
    }
}

// export
export default connect()(CreateFestForm);