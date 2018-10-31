import React, { Component } from 'react';
// material-ui imports
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
// connect to redux
import { connect } from 'react-redux';

class EditFestival extends Component {

  // define state and set properties equal the current festival information
  state = {
    // dialog not open
    open: false,
    name: this.props.festToRespond.name,
    date: this.props.festToRespond.date,
    address: this.props.festToRespond.address,
    image: this.props.festToRespond.image,
    // get clicked festival from redux state
    id: this.props.festToRespond.id,
  };

  // handle changes in inputs, curried function
  handleChangeFor = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  }; // end handleChangeFor

  // open dialog 
  handleClickOpen = () => {
    // this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: this.props.festToRespond});
    this.setState({ open: true });
  }; // end handleClickOpen

  // closes dialog
  handleClose = () => {
    this.setState({ open: false });
  }; // end handleClose

  // handles click of update button
  updateState = () => {
    // dispatch action to update festival information in database
    this.props.dispatch({ type: 'UPDATE_FESTIVAL', payload: this.state });
    // dispatch action to update festival in redux state
    this.props.dispatch({ type: 'FESTIVAL_RESPONSE', payload: this.state });
    this.handleClose();
  } // end updateState


  render() {

    const { fullScreen } = this.props;

    return (
      <div>

        <Button className="button" variant="contained" onClick={this.handleClickOpen}>Edit Festival Information</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
        {/* dialog content */}
          <DialogTitle id="responsive-dialog-title">{"Edit Festival Information"}</DialogTitle>
          <DialogContent>
            <br />
            <TextField
              type="text"
              label="Festival Name"
              variant="outlined"
              value={this.state.name}
              onChange={this.handleChangeFor('name')}
            />
            <br />
            <br />
            <TextField
                type="date"
                label="Date"
                variant="outlined"
                value={this.state.date}
                onChange={this.handleChangeFor('date')}
              />
            <br />
            <br />
            <TextField
              type="text"
              label="Address"
              variant="outlined"
              value={this.state.address}
              onChange={this.handleChangeFor('address')}
            />
            <br />
            <br />
            <TextField
              type="text"
              label="Image Url"
              variant="outlined"
              value={this.state.image}
              onChange={this.handleChangeFor('image')}
            />
            <br />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.updateState} color="primary" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EditFestival.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

// connect to redux state to get info of clicked festival
const mapStateToProps = state => {
  return {
    festToRespond: state.festToRespond,
  };
}

export default connect(mapStateToProps)(withMobileDialog()(EditFestival));