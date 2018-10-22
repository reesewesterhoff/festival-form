import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FestivalDetail extends Component {

    state = {
        festivals: [],
        response: {
            name: '',
            tech_rider: 'a bunch of equipment',
            band_rider: 'a bunch of stuff',
            stage_plot: 'http://all4band.com/image/stage_plot2.jpg',
            input_list: 'https://busites_www.s3.amazonaws.com/littlefeatnetcom/content/LF-input-list-2012.jpg',
            arrival_time: '',
            requests: '',
            notes: '',
            festival_id: 3,
            band_info_id: 1,
        }
    }

    componentDidMount() {
    }

    // getFestInfo = () => {
    //     axios({
    //         method: 'GET',
    //         url: `/api/festival`
    //     }).then(response => {
    //         console.log('festival get response', response.data);
    //         this.setState({
    //             festivals: response.data,
    //         });
    //     }).catch(error => {
    //         alert('Error getting festivals');
    //         console.log('error get fests', error);
    //     });
    // }


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
                name: '',
                requests: '',
                notes: ''
            }
        });
        console.log(this.state.response); 
        axios({    
            method: 'POST',
            url: '/festival',
            data: this.state.response
        }).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log('error posting', error);
            alert('Error submitting response');
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
                    <label> Band Name
                        <input type="text"  onChange={this.handleChangeFor('name')} />
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
        festToRespond: state.festToRespond, 
    }
}

export default connect(mapStateToProps)(FestivalDetail);