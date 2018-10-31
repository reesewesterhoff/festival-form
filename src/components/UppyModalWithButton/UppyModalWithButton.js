// import react
import React, { Component } from 'react';

// Uppy imports
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { DashboardModal } from '@uppy/react';
import './uppy.min.css';

// material-ui imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// styles
const styles = {

    button: {
        margin: 10,
    },
};


class UppyModalWithButton extends Component {

    // define state
    state = {
        modalOpen: false
    }

    // create instance of uppy
    uppy = Uppy({
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: false 
    });


    componentDidMount = () => {
        // use XHRUpload for photo uploads
        this.uppy.use(XHRUpload, {
            endpoint: './fileupload'
        });

        // on completion of upload set url
        this.uppy.on( 'complete', ( result ) => {
            let url = 'images/' + result.successful[0].name;
            // call handleUploadInput and pass it url of new photo upload
            this.props.handleUploadInput(url);
        });
    }

    handleOpen = ( event ) => {
        // prevent page refresh on click
        event.preventDefault();
        // opens uppy modal when set to true
        this.setState({
            modalOpen: true
        });
    }

    handleClose = () => {
        // closes uppy modal when set to false
        this.setState({
            modalOpen: false
        });
    }

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                {/* clicking upload image button opens uppy modal */}
                <Button
                    variant="contained"
                    size="small"
                    onClick={this.handleOpen}
                    className={classes.button}
                >
                    Upload
                </Button>
                <DashboardModal
                    uppy={this.uppy}
                    // close uppy dashboard modal if click outside of dashboard
                    closeModalOnClickOutside
                    // uppy dashboard modal open toggles between true and false
                    open={this.state.modalOpen}
                    // closes uppy dashboard modal
                    onRequestClose={this.handleClose}
                    plugins={['Webcam']}
                />
            </React.Fragment>
        );
    }
}


UppyModalWithButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UppyModalWithButton);