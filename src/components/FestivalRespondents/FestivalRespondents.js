import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalRespondentItem from '../FestivalRespondentItem/FestivalRespondentItem';
import moment from 'moment';
import EditFestival from '../EditFestival/EditFestival';
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


    deleteRespondent = (respondent) => {
        console.log(respondent);
        this.props.dispatch({ type: 'DELETE_RESPONDENT', payload: respondent });
    }

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
                                        Requests
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        Notes
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

const mapStateToProps = state => {
    return {
        state,
        festToRespond: state.festToRespond,
        festivalRespondents: state.festivalRespondents
    }
}

export default withStyles(styles)(connect(mapStateToProps)(FestivalRespondents));