import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CreateFestForm.css';

class CreateFestForm extends Component {


    state = {
        name: '',
        date: '',
        address: '',
        image: '',
    }

    handleChangeFor = propertyName => event => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({ type: 'CREATE_FESTIVAL', payload: this.state });
        this.setState({
            name: '',
            date: '',
            address: '',
            image: '',
        });
    };

    render() {
        return (
            <div className="inputDiv">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create New Festival</h1>
                    <p className="tagline">Please enter some information about this festival.</p>
                    <br />
                    <TextField
                        type="text"
                        label="Festival Name"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.handleChangeFor('name')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="date"
                        variant="outlined"
                        value={this.state.date}
                        onChange={this.handleChangeFor('date')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="text"
                        label="Address"
                        variant="outlined"
                        value={this.state.address}
                        onChange={this.handleChangeFor('address')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="text"
                        label="Photo Url"
                        variant="outlined"
                        value={this.state.image}
                        onChange={this.handleChangeFor('image')}
                    />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" value="Create Festival" variant="outlined" color="primary">Create Festival</Button>
                </form>
            </div>
        );
    }
}

export default connect()(CreateFestForm);