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
import UppyModal from '../UppyModal/UppyModal';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  button: {
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
}

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

  //   uppy = Uppy( {
  //     restrictions: { maxNumberOfFiles: 1 },
  //     autoProceed: false // true is cool behaviour, but this shows it off better
  // } )

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

  // componentDidMount() {
  //   this.uppy.use(XHRUpload, {
  //     endpoint: './fileupload'
  //   })

  //   this.uppy.on('complete', (result) => {
  //     let url = 'images/' + result.successful[0].name;
  //     this.handleUploadInputFor(url);
  //   })
  // }

  render() {

    const { fullScreen } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.center}>
          <Button className={classes.button} variant="contained" onClick={this.handleClickOpen}>Edit Tour Information</Button>
        </div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Edit Tour Information"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label> Band Name
                <input type="text" value={this.state.name} onChange={this.handleChangeFor('name')} />
              </label>
              <br />
              <label> Tech Rider
                {/* <input value={this.state.tech_rider} onChange={this.handleChangeFor('tech_rider')} /> */}
                {/* <textarea type="text" value={this.state.tech_rider} onChange={this.handleChangeFor('tech_rider')} /> */}
                <UppyModal handleUploadInput={this.handleUploadInputFor('tech_rider')} />
              </label>
              <br />
              <label> Band Rider
                {/* <textarea type="text" value={this.state.band_rider} onChange={this.handleChangeFor('band_rider')} /> */}
                <UppyModal handleUploadInput={this.handleUploadInputFor('band_rider')} />
              </label>
              <br />
              <label> Stage Plot
                {/* <textarea type="text" value={this.state.stage_plot} onChange={this.handleChangeFor('stage_plot')} /> */}
                <UppyModal handleUploadInput={this.handleUploadInputFor('stage_plot')} />
              </label>
              <br />
              <label> Input List
                {/* <textarea type="text" value={this.state.input_list} onChange={this.handleChangeFor('input_list')} /> */}
                <UppyModal handleUploadInput={this.handleUploadInputFor('input_list')} />
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