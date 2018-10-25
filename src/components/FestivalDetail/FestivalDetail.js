import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        marginTop: 40,
        minWidth: 275,
        maxWidth: 400,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: 'auto',
    },
    pos: {
        marginBottom: 12,
    },
    countDown: {
        textAlign: 'center',
        color: 'CornflowerBlue',
        margin: 10,
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
                        </CardContent>
                    </Card>
                : null}
                <br />
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label> Arrival Time
                        <input type="time" value={this.state.response.arrival_time} onChange={this.handleChangeFor('arrival_time')} />
                    </label>
                    <br />
                    <label> Notes
                        <input type="textArea" value={this.state.response.notes} onChange={this.handleChangeFor('notes')} />
                    </label>
                    <br />
                    <label> Requests
                        <input type="textArea" value={this.state.response.requests} onChange={this.handleChangeFor('requests')} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
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