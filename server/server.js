
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const busboy = require( 'connect-busboy');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const festivalRouter = require('./routes/festival.router');
const bandInfoRouter = require('./routes/band_info.router');
const festBandInfoRouter = require('./routes/festival_band_info.router');
const fileUpload = require('./routes/fileUpload.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( busboy() );

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/festival', festivalRouter);
app.use('/api/band', bandInfoRouter);
app.use('/api/fest_band_info', festBandInfoRouter);
app.use('/fileupload', fileUpload);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
