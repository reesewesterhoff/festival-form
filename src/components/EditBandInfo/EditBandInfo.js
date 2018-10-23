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
    name: this.props.band_info.name,
    tech_rider: this.props.band_info.tech_rider,
    band_rider: this.props.band_info.band_rider,
    stage_plot: this.props.band_info.stage_plot,
    input_list: this.props.band_info.input_list,
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
    this.props.dispatch({ type: 'UPDATE_BAND_INFO', payload: this.state });
    this.handleClose();
  }

  render() {

    let band_info = this.props.band_info;

    return (
      <div>

        <Button className="button" onClick={this.handleClickOpen}>Edit Tour Information</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Edit Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label> Band Name
                <input type="text" value={band_info.name} onChange={this.handleChangeFor('name')} />
              </label>
              <br />
              <label> Tech Rider
                <input type="text" value={band_info.tech_rider} onChange={this.handleChangeFor('tech_rider')} />
              </label>
              <br />
              <label> Band Rider
                <input type="text" value={band_info.band_rider} onChange={this.handleChangeFor('band_rider')} />
              </label>
              <br />
              <label> Stage Plot
                <input type="text" value={band_info.stage_plot} onChange={this.handleChangeFor('stage_plot')} />
              </label>
              <br />
              <label> Input List
                <input type="text" value={band_info.input_list} onChange={this.handleChangeFor('input_list')} />
              </label>
              <br />
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
    band_info: state.band_info,
  };
}


export default connect(mapStateToProps)(withMobileDialog()(ResponsiveDialog));