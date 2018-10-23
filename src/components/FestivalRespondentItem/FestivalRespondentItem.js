import React, { Component } from 'react';

class FestivalRespondentItem extends Component {

    render() {

        let respondent = this.props.respondent;

        return(
            <tr>
                <td>{respondent.name}</td>
                <td>{respondent.tech_rider}</td>
                <td>{respondent.band_rider}</td>
                <td>
                    <img src={respondent.stage_plot} height="100" alt={respondent.stage_plot} />
                </td>
                <td>
                    <img src={respondent.input_list} height="100" alt={respondent.input_list} />
                </td>
                <td>{respondent.arrival_time}</td>
                <td>{respondent.requests}</td>
                <td>{respondent.notes}</td>
            </tr>
        );
    }
}

export default FestivalRespondentItem;