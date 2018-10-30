import React, { Component } from 'react';

// Uppy stuff
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { DashboardModal } from '@uppy/react';
import './uppy.min.css'; // css not working

//
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



// This could also use Tus instead of xhr --
// The server would have to change to use Tus as well.

const styles = {

    button: {
        margin: 5,
    },

};

class UppyModalWithButton extends Component {

    state = {
        modalOpen: false
    }

    uppy = Uppy( {
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: false 
    } )

    componentDidMount = () => {

        this.uppy.use( XHRUpload, {
            endpoint: './fileupload'
        } )

        this.uppy.on( 'complete', ( result ) => {
            let url = 'images/' + result.successful[0].name;
            this.props.handleUploadInput( url );
        } )

    }

    handleOpen = ( event ) => {
        event.preventDefault();
        this.setState( {
            modalOpen: true
        } )
    }

    handleClose = () => {
        this.setState( {
            modalOpen: false
        } )
    }

    render() {

        // const { classes } = this.props;

        return (
            <React.Fragment>
                <Button
                    variant="contained"
                    onClick={this.handleOpen}
                >
                    Upload Image
                </Button>
                <DashboardModal
                    uppy={this.uppy}
                    closeModalOnClickOutside
                    open={this.state.modalOpen}
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

export default withStyles( styles )( UppyModalWithButton );