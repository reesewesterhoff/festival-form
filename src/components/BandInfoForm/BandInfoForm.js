import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBandInfo from '../EditBandInfo/EditBandInfo';
import UppyModal from '../UppyModal/UppyModal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = {
    h2: {
        textAlign: 'center',
        color: 'DarkSlateGray',
        margin: 40,
    },
    card: {
        marginTop: 30,
        margin: 'auto',
        maxWidth: 400,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
}

class BandInfoForm extends Component {

    state = {
        name: '',
        tech_rider: '',
        band_rider: '',
        stage_plot: '',
        input_list: '',
        person_id: this.props.user.id,
    }

    handleChangeFor = propertyName => event => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_BAND_INFO', payload: this.state });
        this.setState({
            state: {
                name: '',
                tech_rider: '',
                band_rider: '',
                stage_plot: '',
                input_list: '',
            }
        });

    };

    handleUploadInputFor = (property) => {
        return (uploadURL) => {
            console.log(uploadURL);
            this.setState({
                ...this.state,
                [property]: uploadURL,
            })
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    }



    render() {

        const { classes } = this.props;

        return (
            <div>
                {this.props.band_info.id ?
                    <>
                        <h2 className={classes.h2}>Your information is stored! Click the Update Tour Information button to edit.</h2>
                        <EditBandInfo />
                        <br />
                        <br />
                        <h2 className={classes.h2}>Current Tour Information</h2>
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h3">
                                        Tech Rider
                                    </Typography>
                                        <hr />
                                        <br />
                                        <img src={this.props.band_info.tech_rider} width="400" alt="Music festival" />
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography>
                                        <h3>Hospitality Rider</h3>
                                        <hr />
                                        <br />
                                        <img src={this.props.band_info.band_rider} width="400" alt="Music festival" />
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography>
                                        <h3>Stage Plot</h3>
                                        <hr />
                                        <br />
                                        <img src={this.props.band_info.stage_plot} width="400" alt="Music festival" />
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography>
                                        <h3>Input List</h3>
                                        <hr />
                                        <br />
                                        <img src={this.props.band_info.input_list} width="400" alt="Music festival" />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                    :
                    <>
                        <h2>Please enter current band information.</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label> Band Name
                        <input type="text" value={this.state.name} onChange={this.handleChangeFor('name')} />
                            </label>
                            <br />
                            <label> Tech Rider
                        <input type="text" value={this.state.tech_rider} onChange={this.handleChangeFor('tech_rider')} />
                                <UppyModal handleUploadInput={this.handleUploadInputFor('tech_rider')} />
                            </label>
                            <br />
                            <label> Hospitality Rider
                        <input type="text" value={this.state.band_rider} onChange={this.handleChangeFor('band_rider')} />
                                <UppyModal handleUploadInput={this.handleUploadInputFor('band_rider')} />
                            </label>
                            <br />
                            <label> Stage Plot
                        <input type="text" value={this.state.stage_plot} onChange={this.handleChangeFor('stage_plot')} />
                                <UppyModal handleUploadInput={this.handleUploadInputFor('stage_plot')} />
                            </label>
                            <br />
                            <label> Input List
                        <input type="text" value={this.state.input_list} onChange={this.handleChangeFor('input_list')} />
                                <UppyModal handleUploadInput={this.handleUploadInputFor('input_list')} />
                            </label>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                        <hr />
                    </>
                }
            </div>
        );
    }
}

BandInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user,
        band_info: state.band_info,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(BandInfoForm));