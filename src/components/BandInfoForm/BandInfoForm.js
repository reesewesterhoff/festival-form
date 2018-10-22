import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInfoForm extends Component {

    state = {
        name: '',
        tech_rider: '',
        band_rider: '',
        stage_plot: '',
        input_list: '',
        person_id: this.props.user.id,
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
        this.props.dispatch({ type: 'ADD_BAND_INFO', payload: this.state });
        this.setState({
            state: {
                name: '',
                tech_rider: '',
                band_rider: '',
                stage_plot: '',
                input_list: '',
            }
        });
        
    };



    render() {
        return (
            <div>
                <h2>Please enter current band information.</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Band Name
                        <input type="text" onChange={this.handleChangeFor('name')} />
                    </label>
                    <br />
                    <label> Tech Rider
                        <input type="text" onChange={this.handleChangeFor('tech_rider')} />
                    </label>
                    <br />
                    <label> Band Rider
                        <input type="text" onChange={this.handleChangeFor('band_rider')} />
                    </label>
                    <br />
                    <label> Stage Plot
                        <input type="text" onChange={this.handleChangeFor('stage_plot')} />
                    </label>
                    <br />
                    <label> Input List
                        <input type="text" onChange={this.handleChangeFor('input_list')} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(BandInfoForm);