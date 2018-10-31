import React, { Component } from 'react';
// connect to redux
import { connect } from 'react-redux';
// contains individual item of each festival respondent
import FestivalRespondentItem from '../FestivalRespondentItem/FestivalRespondentItem';
// moment.js handles date and time formatting
import moment from 'moment';
// handles updating festival
import EditFestival from '../EditFestival/EditFestival';
// material-ui imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// table header is dark
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

// jss styles
const styles = {
    card: {
        marginTop: 30,
        margin: 'auto',
        maxWidth: 1000,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    pos: {
        marginBottom: 12,
    },
    countDown: {
        textAlign: 'center',
        color: 'CornflowerBlue',
        margin: 10,
    },
    root: {
        width: '100%',
        marginTop: 10,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        margin: 'auto',

    },
};

class FestivalRespondents extends Component {

    // handles delete of respondent
    deleteRespondent = (respondent) => {
        // dispatch action to delete a respondent, send clicked respondent
        this.props.dispatch({ type: 'DELETE_RESPONDENT', payload: respondent });
    }

    // window scrolls to top on page load
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let fest = this.props.festToRespond;
        const { classes } = this.props;

        return (
            <div>
                <br />
                {fest.id ?
                    // show clicked festival on a card
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h3" gutterBottom>
                                {fest.name}
                                <br />
                            </Typography>
                            <Typography className={classes.countDown} color="textSecondary" variant="h6">
                                Happening {moment(fest.date, "YYYYMMDD").fromNow()}
                            </Typography>
                            <Typography>
                                <br />
                                <img src={fest.image} height="400" alt="Music festival" />
                            </Typography>
                            <br />
                            <Typography className={classes.pos} color="textSecondary" variant="h5">
                                {moment(fest.date).format('M-DD-YYYY')}
                                <br />
                                {fest.address}
                                <br />
                            </Typography>
                            <EditFestival />
                        </CardContent>
                    </Card>
                    : null}
                <br />
                <hr />
                <br />
                <h1 className="tagline">{fest.name} Respondents</h1>
                <br />
                {/* festival respondents table */}
                {this.props.festivalRespondents.length !== 0 ?
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>
                                        Band Name
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Tech Rider
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Hospitality Rider
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Stage Plot
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Input List
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Arrival Time
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Notes
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Requests
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Remove
                                    </CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.festivalRespondents.map(respondent => {
                                    return <FestivalRespondentItem
                                        key={respondent.id}
                                        respondent={respondent}
                                        deleteRespondent={this.deleteRespondent}
                                    />
                                }
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                    :
                    // display this if no one has responded to the festival
                    <h2 className="tagline">No Respondents Yet</h2>}
                    <br />
                    <br />
                    <br />
            </div>
        );
    }
}

FestivalRespondents.propTypes = {
    classes: PropTypes.object.isRequired,
};

// connect to redux state to access information there
const mapStateToProps = state => {
    return {
        state,
        festToRespond: state.festToRespond,
        festivalRespondents: state.festivalRespondents
    }
}

export default withStyles(styles)(connect(mapStateToProps)(FestivalRespondents));