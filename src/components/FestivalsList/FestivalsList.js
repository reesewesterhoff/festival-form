import React, { Component } from 'react';
// connect to redux
import { connect } from 'react-redux';
// import festival item to return each festival as it's own item
import FestivalItem from '../FestivalItem/FestivalItem';
import { withRouter } from 'react-router-dom';
// necessary for jss styles
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// jss styles
const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
};

class FestivalsList extends Component {

    // gets the info of the festival clicked, the users's band info, then directs user to festival detail view
    respondToFestival = (festival) => {
        this.props.dispatch({ type: 'FESTIVAL_RESPONSE', payload: festival });
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
        this.props.history.push("/festivaldetail")
    } // end respondToFestival

    // for admin only, gets clicked festival info along with all respondents to the festival, directs admin to fest response view
    reviewFestival = (festival) => {
        this.props.dispatch({ type: 'FESTIVAL_RESPONSE', payload: festival });
        this.props.dispatch({ type: 'FETCH_FEST_RESPONDENTS', payload: festival.id })
        this.props.history.push("/festresponse")
    }

    // deletes specific festival, passed through props -> FestivalItem -> ConfirmDeleteFestival
    deleteFestival = (festId) => {
        // finds festival by id and removes
        this.props.dispatch({ type: 'DELETE_FESTIVAL', payload: festId });
    }

   


    render() {

        const { classes } = this.props;
    

        return (
            <div>
                <div className={classes.card}>
                {/* map returns a component of each festival */}
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
            </div>
        );
    }
}

FestivalsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

// connect to redux state for information
const mapStateToProps = state => {
    return {
        user: state.user,
        festivals: state.festivals,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(withRouter(FestivalsList)));