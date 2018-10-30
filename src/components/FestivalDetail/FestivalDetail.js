import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';


const styles = {
    card: {
        marginTop: 30,
        margin: 'auto',
        minWidth: 275,
        maxWidth: 700,
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

class FestivalDetail extends Component {

    state = {
        festivals: [],
        response: {
            name: this.props.band_info.name,
            tech_rider: this.props.band_info.tech_rider,
            band_rider: this.props.band_info.band_rider,
            stage_plot: this.props.band_info.stage_plot,
            input_list: this.props.band_info.input_list,
            arrival_time: '',
            requests: '',
            notes: '',
            festival_id: this.props.festToRespond.id,
            band_info_id: this.props.band_info.id,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    handleChangeFor = propertyName => event => {
        this.setState({
            response: {
                ...this.state.response,
                [propertyName]: event.target.value
            }

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_RESPONSE', payload: this.state.response });
        this.setState({
            response: {
                arrival_time: '',
                requests: '',
                notes: ''
            }
        });
    };


    render() {

        let fest = this.props.festToRespond;
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <div className="tagline">
                        <h1>Festival RSVP</h1>
                        <p>Please verify that you are responding to the correct festival than enter your information.</p>
                        <p>Upon clicking RSVP all of your current tour information along with your arrival time, notes, and requests will be</p>
                        <p>made visible to the festival promoter.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputDiv">
                            <br />
                            <p className="tagline">Please enter your arrival time and any notes or requests you might have for the festival promoter.</p>
                            <br />
                            <label>Arrival Time
                            <TextField
                                    type="time"
                                    variant="outlined"
                                    value={this.state.response.arrival_time}
                                    onChange={this.handleChangeFor('arrival_time')}
                                />
                            </label>
                            <br />
                            <br />
                            <TextField
                                type="text"
                                variant="outlined"
                                label="Notes"
                                value={this.state.response.notes}
                                onChange={this.handleChangeFor('notes')}
                            />
                            <br />
                            <br />
                            <TextField
                                type="text"
                                variant="outlined"
                                label="Requests"
                                value={this.state.response.requests}
                                onChange={this.handleChangeFor('requests')}
                            />
                            <br />
                            <br />
                            <Button
                                type="submit"
                                value="Submit"
                                size="medium"
                                color="primary"
                                variant="outlined"
                            >
                                RSVP <DoneAllIcon />
                            </Button>
                        </div>
                    </form>
                    <br />
                </div>
                <div>
                    {fest.id ?
                        <div>
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
                                        <img src={fest.image} height="300" alt="Music festival" />
                                    </Typography>
                                    <br />
                                    <Typography className={classes.pos} color="textSecondary" variant="h5">
                                        {moment(fest.date).format('M-DD-YYYY')}
                                        <br />
                                        {fest.address}
                                        <br />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        : null}
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

FestivalDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        state,
        band_info: state.band_info,
        festToRespond: state.festToRespond,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(FestivalDetail));