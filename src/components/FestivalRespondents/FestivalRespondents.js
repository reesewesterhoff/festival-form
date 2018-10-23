import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalRespondentItem from '../FestivalRespondentItem/FestivalRespondentItem';

class FestivalRespondents extends Component {

    componentDidMount() {
        
    }

    render() {

        let fest = this.props.festToRespond;

        return (
            <div>
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
                <br />
                {this.props.festivalRespondents.length!==0 ?
                <table>
                    <thead>
                        <tr>
                            <th>
                                Band Name
                            </th>
                            <th>
                                Tech Rider
                            </th>
                            <th>
                                Band Rider
                            </th>
                            <th>
                                Stage Plot
                            </th>
                            <th>
                                Input List
                            </th>
                            <th>
                                Arrival Time
                            </th>
                            <th>
                                Requests
                            </th>
                            <th>
                                Notes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.festivalRespondents.map(respondent => {
                               return   <FestivalRespondentItem 
                                            key={respondent.id}
                                            respondent={respondent}
                                        />
                            }
                        )}
                    </tbody>
                </table>
                :
                'No Respondents Yet!'}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        state,
        festToRespond: state.festToRespond,
        festivalRespondents: state.festivalRespondents 
    }
}

export default connect(mapStateToProps)(FestivalRespondents);