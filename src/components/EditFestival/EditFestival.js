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
    name: this.props.festToRespond.name,
    date: this.props.festToRespond.date,
    address: this.props.festToRespond.address,
    image: this.props.festToRespond.image,
    id: this.props.festToRespond.id,
  };

  handleChangeFor = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  }

  handleClickOpen = () => {
    this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: this.props.festToRespond});
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  updateState = () => {
    this.props.dispatch({ type: 'UPDATE_FESTIVAL', payload: this.state });
    this.props.dispatch({type: 'FESTIVAL_RESPONSE', payload: this.props.festToRespond});
    this.handleClose();
  }

  componentDidMount() {
    
  }

  render() {

    const {fullScreen} = this.props;

    return (
      <div>

        <Button className="button" variant="contained" onClick={this.handleClickOpen}>Edit Festival Information</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Edit Festival Information"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label> Festival Name 
                <input type="text" value={this.state.name} onChange={this.handleChangeFor('name')} />
              </label>
              <br />
              <label> Date 
                <input type="date" value={this.state.date} onChange={this.handleChangeFor('date')} />
              </label>
              <br />
              <label> Address 
                <input type="text" value={this.state.address} onChange={this.handleChangeFor('address')} />
              </label>
              <br />
              <label> Image Url 
                <input type="text" value={this.state.image} onChange={this.handleChangeFor('image')} />
              </label>
              <br />
            </DialogContentText>
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

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


const mapStateToProps = state => {
  return {
    festToRespond: state.festToRespond,
  };
}


export default connect(mapStateToProps)(withMobileDialog()(ResponsiveDialog));