import React from 'react';
// material-ui imports
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class SnackBar extends React.Component {
  //define state
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
  };

  // handles opening of snackbar
  handleClick = state => () => {
    this.setState({ open: true, ...state });
  }; // end handleClick

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
        <Button
          type="submit"
          value="Submit"
          size="medium"
          color="primary"
          variant="outlined"
          onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}
        >
          {this.props.buttonText} {this.props.icon}
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="secondary"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default SnackBar;