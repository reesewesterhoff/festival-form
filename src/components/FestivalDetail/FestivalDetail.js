import React, { Component } from 'react';
import { connect } from 'react-redux';

class FestivalDetail extends Component {

    state = {
        festivals: [],
        response: {
            name: this.props.band_info.name,
            tech_rider: this.props.band_info.tech_rider,
            band_rider: this.props.band_info.band_rider,
            stage_plot: this.props.band_info.stage_plot,
            input_list: this.props.band_info.input_list,
            arrival_time: '',
            requests: '',
            notes: '',
            festival_id: this.props.festToRespond.id,
            band_info_id: this.props.band_info.id,
        }
    }

    componentDidMount() {
        
    }


    handleChangeFor = propertyName => event => {
        this.setState({
            response: {
                ...this.state.response,
                [propertyName]: event.target.value
            }
            
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_RESPONSE', payload: this.state.response });
        this.setState({
            response: {
                arrival_time: '',
                requests: '',
                notes: ''
            }
        });
    };


    render() {

        let fest = this.props.festToRespond;

        return (
            <div>
                FestivalDetail
                {fest.id ? 
                <ul>
                    <li>{fest.name}</li>
                    <li>{fest.date}</li>
                    <li>{fest.address}</li>
                    <li>
                        <img src={fest.image} height="200" />
                    </li>
                </ul>
                : null }
                <br />
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label> Arrival Time
                        <input type="text"  onChange={this.handleChangeFor('arrival_time')} />
                    </label>
                    <br />
                    <label> Notes
                        <input type="textArea"  onChange={this.handleChangeFor('notes')} />
                    </label>
                    <br />
                    <label> Requests
                        <input type="textArea"  onChange={this.handleChangeFor('requests')} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        state,
        band_info: state.band_info,
        festToRespond: state.festToRespond, 
    }
}

export default connect(mapStateToProps)(FestivalDetail);