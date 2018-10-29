// server/routes/fileUpload.router.js

// requires
const fs = require( 'fs' );
const express = require( 'express' );
// create router
const router = express.Router();

// Set where to write
const whereToWrite = '/../../public/images/';

// POST request
router.post( '/', function ( req, res ) {
    var fstream;
    req.pipe( req.busboy );
    req.busboy.on( 'file', function ( fieldname, file, filename ) {
        console.log( "Uploading: " + filename );
        fstream = fs.createWriteStream( __dirname + whereToWrite + filename );
        file.pipe( fstream );
        fstream.on( 'close', function () {
            res.redirect( 'back' );
        } );
    } );
} );

// exports
module.exports = router;