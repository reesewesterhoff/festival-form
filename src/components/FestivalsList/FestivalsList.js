import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalItem from '../FestivalItem/FestivalItem';

class FestivalsList extends Component {

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

export default connect(mapStateToProps)(FestivalsList);