import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalRespondentItem from '../FestivalRespondentItem/FestivalRespondentItem';
import moment from 'moment';
import EditFestival from '../EditFestival/EditFestival';
import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        marginTop: 30,
        marginLeft: 100,
        minWidth: 275,
        maxWidth: 400,
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
    h1: {
        textAlign: 'center',
    },
};

class FestivalRespondents extends Component {

    componentDidMount() {
        
        
    }

    deleteRespondent = (respondent) => {
        console.log(respondent);
        this.props.dispatch({type: 'DELETE_RESPONDENT', payload: respondent});
    }

    render() {

        let fest = this.props.festToRespond;
        const { classes } = this.props;

        return (
            <div>
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
                        <img src={fest.image} height="200" />
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
                                            deleteRespondent={this.deleteRespondent}
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