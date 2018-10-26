import React, { Component } from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';

class FestivalRespondentItem extends Component {

    render() {

        let respondent = this.props.respondent;

        return (
            <tr>
                <td>{respondent.name}</td>
                <td>
                    <img src={respondent.tech_rider} width="200" alt="Technical rider" />
                </td>
                <td>
                    <img src={respondent.band_rider} width="200" alt="Hospitality rider" />
                </td>
                <td>
                    <img src={respondent.stage_plot} width="200" alt="Stage plot" />
                </td>
                <td>
                    <img src={respondent.input_list} width="200" alt="Input list" />
                </td>
                <td>{moment(respondent.arrival_time, 'hh:mm:ss').format('h:mm A')}</td>
                <td>{respondent.requests}</td>
                <td>{respondent.notes}</td>
                <td><Button variant="outlined" color="secondary" onClick={() => this.props.deleteRespondent(respondent)}>Delete</Button></td>
            </tr>
        );
    }
}

export default FestivalRespondentItem;