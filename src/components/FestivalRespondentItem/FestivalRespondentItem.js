import React, { Component } from 'react';
// moment.js to format dates and times
import moment from 'moment';
// download icon
import GetApp from '@material-ui/icons/GetApp';
// material-ui imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// handles delete of respondent
import ConfirmDeleteRespondent from '../ConfirmDeleteRespondent/ConfirmDeleteRespondent';

// jss styles
const styles = {
    icon: {
      margin: 2,
      fontSize: 32,
      color: 'CornflowerBlue',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'Gainsboro',
        },
    },
    td: {
        fontSize: 16,
    },
    title: {
        fontSize: 24,
    }
  };

class FestivalRespondentItem extends Component {

    render() {

        let respondent = this.props.respondent;
        const { classes } = this.props;

        return (
            // table populates with each respondents info
            <TableRow className={classes.row} hover>
                <TableCell className={classes.title}>{respondent.name}</TableCell>
                <TableCell className={classes.td}>
                    <img src={respondent.tech_rider} width="200" alt="Technical rider" />
                    <a href={respondent.tech_rider} download><GetApp className={classes.icon} /></a>
                </TableCell>
                <TableCell className={classes.td}>
                    <img src={respondent.band_rider} width="200" alt="Hospitality rider" />
                    <a href={respondent.band_rider} download><GetApp className={classes.icon} /></a> 
                </TableCell>
                <TableCell className={classes.td}>
                     <img src={respondent.stage_plot} width="200" alt="Stage plot" />
                     <a href={respondent.stage_plot} download><GetApp className={classes.icon} /></a>
                </TableCell>
                <TableCell className={classes.td}>
                    <img src={respondent.input_list} width="200" alt="Input list" />
                    <a href={respondent.input_list} download><GetApp className={classes.icon} /></a>
                </TableCell>
                <TableCell className={classes.td}>{moment(respondent.arrival_time, 'hh:mm:ss').format('h:mm A')}</TableCell>
                <TableCell className={classes.td}>{respondent.notes}</TableCell>
                <TableCell className={classes.td}>{respondent.requests}</TableCell> 
                <TableCell>
                        <ConfirmDeleteRespondent 
                            deleteRespondent={this.props.deleteRespondent}
                            respondent={respondent}
                        />
                </TableCell>
            </TableRow>
        );
    }
}

FestivalRespondentItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(FestivalRespondentItem);