import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return(
            <div>
                <h1>Create New Festival</h1>
                <form onSubmit={this.handleSubmit}>
                <label> Festival Name
                        <input type="text" value={this.state.name} onChange={this.handleChangeFor('name')} />
                    </label>
                    <br />
                    <label> Date
                        <input type="date" value={this.state.date} onChange={this.handleChangeFor('date')} />
                    </label>
                    <br />
                    <label> Address
                        <input type="text" value={this.state.address} onChange={this.handleChangeFor('address')} />
                    </label>
                    <br />
                    <label> Photo Url
                        <input type="text" value={this.state.image} onChange={this.handleChangeFor('image')} />
                    </label>
                    <br />
                    <input type="submit" value="Create Festival" />
                </form>
            </div>
        );
    }
}

export default connect()(CreateFestForm);