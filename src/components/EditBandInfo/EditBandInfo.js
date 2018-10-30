import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { connect } from 'react-redux';
import UppyModal from '../UppyModal/UppyModal';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


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

class ResponsiveDialog extends React.Component {

  state = {
    open: false,
    name: this.props.band_info.name,
    tech_rider: this.props.band_info.tech_rider,
    band_rider: this.props.band_info.band_rider,
    stage_plot: this.props.band_info.stage_plot,
    input_list: this.props.band_info.input_list,
    id: this.props.user.id,
  };

  handleChangeFor = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  }

  handleClickOpen = () => {
    this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  updateState = () => {
    this.props.dispatch({ type: 'UPDATE_BAND_INFO', payload: this.state });
    this.handleClose();
  }

  handleUploadInputFor = (property) => {
    return (uploadURL) => {
      console.log(uploadURL);
      this.setState({
        ...this.state,
        [property]: uploadURL,
      })
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.center}>
          <Button className={classes.editButton} variant="contained" onClick={this.handleClickOpen}>Edit Tour Information</Button>
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h5" id="modal-title">
              Update Tour Information
          </Typography>
            <Typography variant="subtitle1">
              Enter in the current tour information. Clicking update will store all new information.
            </Typography>
            <br />
            {/* <Typography> */}
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
                  readOnly
                  disabled
                />
                <UppyModal handleUploadInput={this.handleUploadInputFor('tech_rider')} />
              </div>
              <br />
              <div>
                <TextField
                  type="text"
                  label="Hospitality Rider"
                  value={this.state.band_rider}
                  readOnly
                  disabled
                />
                <UppyModal handleUploadInput={this.handleUploadInputFor('band_rider')} />
              </div>
              <br />
              <div>
                <TextField
                  type="text"
                  label="Stage Plot"
                  value={this.state.stage_plot}
                  readOnly
                  disabled
                />
                <UppyModal handleUploadInput={this.handleUploadInputFor('stage_plot')} />
              </div>
              <br />
              <div>
                <TextField
                  type="text"
                  label="Input List"
                  value={this.state.input_list}
                  readOnly
                  disabled
                />
                <UppyModal handleUploadInput={this.handleUploadInputFor('input_list')} />
              </div>
              <br />
            {/* </Typography> */}
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

ResponsiveDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    state,
    band_info: state.band_info,
    user: state.user,
  };
}


export default withStyles(styles)(connect(mapStateToProps)(withMobileDialog()(ResponsiveDialog)));