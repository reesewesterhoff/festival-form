const express = require( 'express' );
const router = express.Router();

// file stream require
const fs = require( 'fs' );

// Set where to write!
const whereToWrite = '/../../public/images/';

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

module.exports = router;