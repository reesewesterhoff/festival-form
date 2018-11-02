import React, { Component } from 'react';
// connect component to redux
import { connect } from 'react-redux';
// my component, displays after initial upload of tour information
import EditBandInfo from '../EditBandInfo/EditBandInfo';
// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GetApp from '@material-ui/icons/GetApp';

// jss styles
const styles = {
    card: {
        margin: 'auto',
        maxWidth: 700,
        textAlign: 'center',
    },
    icon: {
        margin: 2,
        fontSize: 32,
        color: 'CornflowerBlue',
    },
}

class CurrentBandInfo extends Component {

    // get band info on page load, specific to user, gets info by user's id
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    }


    render() {

        let techRiderCheck = this.props.band_info.tech_rider;
        let techRiderEndsWith = techRiderCheck.endsWith(".pdf" || ".jpg" || ".png" || ".gif" || ".jpeg");

        let bandRiderCheck = this.props.band_info.band_rider;
        let bandRiderEndsWith = bandRiderCheck.endsWith(".pdf" || ".jpg" || ".png" || ".gif" || ".jpeg");

        let stagePlotCheck = this.props.band_info.stage_plot;
        let stagePlotEndsWith = stagePlotCheck.endsWith(".pdf" || ".jpg" || ".png" || ".gif" || ".jpeg");

        let inputListCheck = this.props.band_info.input_list;
        let inputListEndsWith = inputListCheck.endsWith(".pdf" || ".jpg" || ".png" || ".gif" || ".jpeg");

        const { classes } = this.props;

        return (
            <>
                <h2 className="tagline" style={{ margin: 40 }}>Your information is stored! Click the Update Tour Information button to edit.</h2>
                <EditBandInfo />
                <br />
                <br />
                <div className="cardDiv">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h4">
                                Current Tour Information
                            </Typography>
                            <hr />
                            <br />
                            <h3>Tech Rider</h3>
                            {techRiderEndsWith ?
                                <object data={this.props.band_info.tech_rider} width="500" height="400">
                                    <p>{this.props.band_info.tech_rider}</p>
                                </object>
                                :
                                <img src={this.props.band_info.tech_rider} width="500" alt={this.props.band_info.tech_rider} />
                            }
                            <a href={this.props.band_info.tech_rider} download><GetApp className={classes.icon} /></a>
                            <br />
                            <br />
                            <h3>Hospitality Rider</h3>
                            {bandRiderEndsWith ?
                                <object data={this.props.band_info.band_rider} width="500" height="400">
                                    <p>{this.props.band_info.band_rider}</p>
                                </object>
                                :
                                <img src={this.props.band_info.band_rider} width="500" alt={this.props.band_info.band_rider} />
                            }
                            <a href={this.props.band_info.band_rider} download><GetApp className={classes.icon} /></a>
                            <br />
                            <br />
                            <h3>Stage Plot</h3>
                            {stagePlotEndsWith ?
                                <object data={this.props.band_info.stage_plot} width="500" height="400">
                                    <p>{this.props.band_info.stage_plot}</p>
                                </object>
                                :
                                <img src={this.props.band_info.stage_plot} width="500" alt={this.props.band_info.stage_plot} />
                            }
                            <a href={this.props.band_info.stage_plot} download><GetApp className={classes.icon} /></a>
                            <br />
                            <br />
                            <h3>Input List</h3>
                            {inputListEndsWith ?
                                <object data={this.props.band_info.input_list} width="500" height="400">
                                    <p>{this.props.band_info.input_list}</p>
                                </object>
                                :
                                <img src={this.props.band_info.input_list} width="500" alt={this.props.band_info.input_list} />
                            }
                            <a href={this.props.band_info.input_list} download><GetApp className={classes.icon} /></a>
                        </CardContent>
                    </Card>
                    <br />
                    <br />
                    <br />
                </div>
            </>
        );
    }
}

CurrentBandInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};
// necessary to use information from the redux state
const mapStateToProps = state => {
    return {
        user: state.user,
        band_info: state.band_info,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(CurrentBandInfo));