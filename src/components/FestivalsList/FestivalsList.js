import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalItem from '../FestivalItem/FestivalItem';
import { withRouter } from 'react-router-dom';

class FestivalsList extends Component {

    respondToFestival = (festival) => {
        console.log('festival clicked', festival);
        this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: festival});
        this.props.history.push("/festivaldetail")
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
                                        key={festival.id}
                                        festival={festival}
                                        respondToFestival={this.respondToFestival}
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
        festivals: state.festivals,
    }
}

export default connect(mapStateToProps)(withRouter(FestivalsList));