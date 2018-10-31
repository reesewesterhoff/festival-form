import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBandInfo from '../EditBandInfo/EditBandInfo';
import UppyModalWithButton from '../UppyModalWithButton/UppyModalWithButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = {
    h2: {
        textAlign: 'center',
        color: 'DarkSlateGray',
        margin: 40,
    },
    card: {
        margin: 'auto',
        maxWidth: 700,
        textAlign: 'center',
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
                        <div className="cardDiv">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h3">
                                        Current Tour Information
                                    </Typography>
                                    <hr />
                                    <br />
                                    <h3>Tech Rider</h3>
                                    <img src={this.props.band_info.tech_rider} width="400" alt="Music festival" />
                                    <br />
                                    <br />
                                    <h3>Hospitality Rider</h3>
                                    <img src={this.props.band_info.band_rider} width="400" alt="Music festival" />
                                    <br />
                                    <br />
                                    <h3>Stage Plot</h3>
                                    <img src={this.props.band_info.stage_plot} width="400" alt="Music festival" />
                                    <br />
                                    <br />
                                    <h3>Input List</h3>
                                    <img src={this.props.band_info.input_list} width="400" alt="Music festival" />
                                </CardContent>
                            </Card>
                            <br />
                            <br />
                            <br />
                        </div>
                    </>
                    :
                    <>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputDiv">
                            <h2 className={classes.h2}>Please upload current band information.</h2>
                                <br />
                                <TextField
                                    type="text"
                                    label="Band Name"
                                    variant="outlined"
                                    value={this.state.name}
                                    onChange={this.handleChangeFor('name')}
                                />
                                <br />
                                <br />
                                <TextField
                                    type="text"
                                    label="Tech Rider"
                                    variant="outlined"
                                    value={this.state.tech_rider}
                                    onChange={this.handleChangeFor('tech_rider')}
                                />
                                <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('tech_rider')} />
                                <br />
                                <br />
                                <TextField
                                    type="text"
                                    label="Hospitality Rider"
                                    variant="outlined"
                                    value={this.state.band_rider}
                                    onChange={this.handleChangeFor('band_rider')}
                                />
                                <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('band_rider')} />
                                <br />
                                <br />
                                <TextField
                                    type="text"
                                    label="Stage Plot"
                                    variant="outlined"
                                    value={this.state.stage_plot}
                                    onChange={this.handleChangeFor('stage_plot')}
                                />
                                <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('stage_plot')} />
                                <br />
                                <br />
                                <TextField
                                    type="text"
                                    label="Input List"
                                    variant="outlined"
                                    value={this.state.input_list}
                                    onChange={this.handleChangeFor('input_list')}
                                />
                                <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('input_list')} />
                                <br />
                                <br />
                                <Button
                                    type="submit"
                                    value="Submit"
                                    variant="outlined"
                                    size="large"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                        <hr />
                        <br />
                        <br />
                        <br />
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