import React, { Component } from 'react';
import moment from 'moment';

class FestivalRespondentItem extends Component {

    render() {

        let respondent = this.props.respondent;

        return (
            <tr>
                <td>{respondent.name}</td>
                <td>
                    <img src={respondent.tech_rider} width="400" alt="Technical rider" />
                </td>
                <td>
                    <img src={respondent.band_rider} width="400" alt="Hospitality rider" />
                </td>
                <td>
                    <img src={respondent.stage_plot} width="400" alt="Stage plot" />
                </td>
                <td>
                    <img src={respondent.input_list} width="400" alt="Input list" />
                </td>
                <td>{moment(respondent.arrival_time, 'hh:mm:ss').format('h:mm A')}</td>
                <td>{respondent.requests}</td>
                <td>{respondent.notes}</td>
                <td><button onClick={() => this.props.deleteRespondent(respondent)}>Delete</button></td>
            </tr>
        );
    }
}

export default FestivalRespondentItem;