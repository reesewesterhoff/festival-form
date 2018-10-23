import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalItem from '../FestivalItem/FestivalItem';
import { withRouter } from 'react-router-dom';

class FestivalsList extends Component {

    respondToFestival = (festival) => {
        this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: festival});
        this.props.dispatch({type: 'FETCH_BAND_INFO', payload: this.props.user.id});
        this.props.history.push("/festivaldetail")
    }

    reviewFestival = (festival) => {
        console.log('festival id', festival.id);
        
        this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: festival});
        this.props.dispatch({type: 'FETCH_FEST_RESPONDENTS', payload: festival.id})
        this.props.history.push("/festresponse")
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Photo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.festivals.map(festival => {
                            return <FestivalItem 
                                        id={this.props.id}
                                        key={festival.id}
                                        festival={festival}
                                        respondToFestival={this.respondToFestival}
                                        reviewFestival={this.reviewFestival}
                                    />
                            }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        festivals: state.festivals,
    }
}

export default connect(mapStateToProps)(withRouter(FestivalsList));