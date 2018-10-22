import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { connect } from 'react-redux';

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
    id: this.props.item.id,
    description: this.props.item.description,
    image_url: this.props.item.image_url,
  };

handleChangeFor = property => event => {
    this.setState({
        ...this.state,
        [property]: event.target.value,
    });
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  updateState = () => {
    this.props.dispatch({type:'UPDATE_BAND_INFO', payload:this.state});
    console.log('hey???')
    this.handleClose();
}

  render() {

    

    return (
      <div>
          
        <Button className="button"onClick={this.handleClickOpen}>Edit Item</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Edit Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <input value={this.state.description} onChange={this.handleChangeFor('description')} />
            <input value={this.state.image_url} onChange={this.handleChangeFor('image_url')} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
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

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => {
    return { 
      state,
      band_info: band_info.state
    };
}


export default connect(mapStateToProps) (withMobileDialog()(ResponsiveDialog));