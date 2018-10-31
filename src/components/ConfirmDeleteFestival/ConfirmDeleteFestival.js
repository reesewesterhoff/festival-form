import React, { Component } from 'react';
// material-ui imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// icon import
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

// makes pop up slide up from bottom
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ConfirmDeleteFestival extends Component {
  // define state, set dialog box open property to false
  state = {
    open: false,
  };

  // sets state of open to true (opens dialog box)
  handleClickOpen = () => {
    this.setState({ open: true });
  }; // end handleClickOpen

  // sets state of open to false (closes dialog box)
  handleClose = () => {
    this.setState({ open: false });
  }; // end handleClose


  render() {
    
    return (
      <div>
        {/* button with delete icon */}
        <Button 
          onClick={this.handleClickOpen} 
          size="large" 
          variant="outlined" 
          color="secondary" 
        >
          <DeleteRoundedIcon />
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          {/* dialog box content */}
          <DialogTitle id="alert-dialog-slide-title">
            {"Delete festival?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Delete this festival? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {/* run delete festival function on confirm delete (in FestivalsList component) */}
            <Button onClick={() => this.props.deleteFestival(this.props.festival.id)} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmDeleteFestival;