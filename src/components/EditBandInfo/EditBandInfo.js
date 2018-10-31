import React, { Component } from 'react';
// connect to redux state
import { connect } from 'react-redux';
// material-ui imports
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// my uppy component
import UppyModalWithButton from '../UppyModalWithButton/UppyModalWithButton';

// jss styles
const styles = theme => ({
  editButton: {
    width: 200,
    height: 60,
    fontSize: 20,
    backgroundColor: 'CornflowerBlue',
    color: 'white',
  },
  center: {
    width: 200,
    margin: 'auto',
  },
  paper: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
  },
  actionButtons: {
    margin: 10,
  },
});

class EditBandInfo extends Component {
  // define state and set properties equal to the current band information for that user
  state = {
    // modal not open 
    open: false,
    name: this.props.band_info.name,
    tech_rider: this.props.band_info.tech_rider,
    band_rider: this.props.band_info.band_rider,
    stage_plot: this.props.band_info.stage_plot,
    input_list: this.props.band_info.input_list,
    // gets user's id from redux state
    id: this.props.user.id,
  };

  // handles input field changes, curried function
  handleChangeFor = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  } // end handleChangeFor

  // opens modal to update band information
  handleClickOpen = () => {
    // this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    this.setState({ open: true });
  }; // end handleClickOpen

  // closes modal
  handleClose = () => {
    this.setState({ open: false });
  }; // end handleClose

  // handles information update 
  updateState = () => {
    // dispatch action to update band info with new information
    this.props.dispatch({ type: 'UPDATE_BAND_INFO', payload: this.state });
    // close modal
    this.handleClose();
  }; // end updateState

  // handle file uploads
  handleUploadInputFor = (property) => {
    return (uploadURL) => {
      this.setState({
        ...this.state,
        [property]: uploadURL,
      })
    }
  }; // end handleUploadInputFor

  render() {

    const { classes } = this.props;

    return (
      <div>
        {/* big blue update info button, opens update modal */}
        <div className={classes.center}>
          <Button className={classes.editButton} variant="contained" onClick={this.handleClickOpen}>Edit Tour Information</Button>
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {/* modal content */}
          <div className={classes.paper}>
            <Typography variant="h5" id="modal-title">
              Update Tour Information
          </Typography>
            <Typography variant="subtitle1">
              Enter in the current tour information. Clicking update will store all new information.
            </Typography>
            <br />
            <div>
              <TextField
                type="text"
                label="Band Name"
                value={this.state.name}
                onChange={this.handleChangeFor('name')}
              />
            </div>
            <br />
            <div>
              <TextField
                  type="text"
                  label="Tech Rider"
                  value={this.state.tech_rider}
                  onChange={this.handleChangeFor('tech_rider')}
                />
              {/* bring in uppy component to handle file uploads */}
              <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('tech_rider')} />
            </div>
            <br />
            <div>
              <TextField
                type="text"
                label="Hospitality Rider"
                value={this.state.band_rider}
                onChange={this.handleChangeFor('band_rider')}
              />
              <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('band_rider')} />
            </div>
            <br />
            <div>
              <TextField
                type="text"
                label="Stage Plot"
                value={this.state.stage_plot}
                onChange={this.handleChangeFor('stage_plot')}
              />
              <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('stage_plot')} />
            </div>
            <br />
            <div>
              <TextField
                type="text"
                label="Input List"
                value={this.state.input_list}
                onChange={this.handleChangeFor('input_list')}
              />
              <UppyModalWithButton handleUploadInput={this.handleUploadInputFor('input_list')} />
            </div>
            <br />
            <Button
              className={classes.actionButtons}
              onClick={this.handleClose}
              color="secondary"
              size="large"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              className={classes.actionButtons}
              onClick={this.updateState}
              color="primary"
              size="large"
              variant="outlined"
              autoFocus
            >
              Update
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

EditBandInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

// connect to redux state to access information there
const mapStateToProps = state => {
  return {
    state,
    band_info: state.band_info,
    user: state.user,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(EditBandInfo));