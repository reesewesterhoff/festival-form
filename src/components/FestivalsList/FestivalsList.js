import React, { Component } from 'react';
import { connect } from 'react-redux';
import FestivalItem from '../FestivalItem/FestivalItem';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
};

class FestivalsList extends Component {

    respondToFestival = (festival) => {
        this.props.dispatch({ type: 'FESTIVAL_RESPONSE', payload: festival });
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
        this.props.history.push("/festivaldetail")
    }

    reviewFestival = (festival) => {
        this.props.dispatch({ type: 'FESTIVAL_RESPONSE', payload: festival });
        this.props.dispatch({ type: 'FETCH_FEST_RESPONDENTS', payload: festival.id })
        this.props.history.push("/festresponse")
    }

    deleteFestival = (festId) => {
        console.log('delete clickedd', festId);
        this.props.dispatch({ type: 'DELETE_FESTIVAL', payload: festId });
    }

    
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.card}>
                    {this.props.festivals.map(festival => {
                        return <FestivalItem
                            id={this.props.id}
                            key={festival.id}
                            festival={festival}
                            respondToFestival={this.respondToFestival}
                            reviewFestival={this.reviewFestival}
                            deleteFestival={this.deleteFestival}
                        />
                    }
                    )}
            </div>
        );
    }
}

FestivalsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user,
        festivals: state.festivals,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(withRouter(FestivalsList)));