import React, { Component } from 'react';
// connect component to redux
import { connect } from 'react-redux';
// material-ui imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// uppy file uploads
import UppyModalWithButton from '../UppyModalWithButton/UppyModalWithButton';
// current band info for users who have already uploaded the first time
import CurrentBandInfo from '../CurrentBandInfo/CurrentBandInfo';


class BandInfoForm extends Component {
    // define state and create properties to be controlled by inputs on DOM (except for person_id)
    state = {
        name: '',
        tech_rider: '',
        band_rider: '',
        stage_plot: '',
        input_list: '',
        // gets person_id from redux state
        person_id: this.props.user.id,
    }

    // handle changes in inputs on DOM, curried function
    handleChangeFor = propertyName => event => {
        this.setState({
            // only change property name passed in, set to what user types into input
            ...this.state,
            [propertyName]: event.target.value
        });
    }; // end handleChangeFor

    // handle form submission
    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        // dispatch action to add band info, send state
        this.props.dispatch({ type: 'ADD_BAND_INFO', payload: this.state });
        // reset inputs
        this.setState({
            state: {
                name: '',
                tech_rider: '',
                band_rider: '',
                stage_plot: '',
                input_list: '',
            }
        });
    }; // end handleSubmit

    // handle uppy file uploads, curried function
    handleUploadInputFor = (property) => {
        return (uploadURL) => {
            this.setState({
                ...this.state,
                [property]: uploadURL,
            })
        }
    }; // end handleUploadInputFor

    // get band info on page load, specific to user, gets info by user's id
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    }

    render() {
        return (
            <div>
                {/* if user has previously uploaded band info, show CurrentBandInfo component */}
                {this.props.band_info.id ?
                    <CurrentBandInfo />
                    // if the user has not previously uploaded tour information, show the initial upload form
                    :
                    <>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputDiv">
                                <h2 className="tagline" style={{ margin: 40 }}>Please upload PDFs or Images of current band information.</h2>
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
                                {/* bring in uppy component to handle file uploads */}
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

// necessary to use information from the redux state
const mapStateToProps = state => {
    return {
        user: state.user,
        band_info: state.band_info,
    }
}

export default connect(mapStateToProps)(BandInfoForm);