// server/routes/band_info.router.js

// requires
const express = require('express');
const pool = require('../modules/pool');

// create router
const router = express.Router();

// GET request for users band information
router.get('/', (req, res) => {
    // gets info based on the user id
    pool.query(`SELECT * FROM "band_info"
                WHERE "person_id"=$1`, [req.user.id])
    .then(results => {
        // send results to client
        res.send(results.rows[0]);
    }).catch(error => {
        console.log('Error getting band info', error);
        res.sendStatus(500);
    });
}); // end GET band information for user


// POST request with band info
router.post('/', (req, res) => {
    let info = req.body;
    // make a new row in the table with user input information
    pool.query(`INSERT INTO "band_info" ("name", "tech_rider", "band_rider", "stage_plot", "input_list", "person_id")
                VALUES ($1, $2, $3, $4, $5, $6)`, [info.name, info.tech_rider, info.band_rider, info.stage_plot, 
                info.input_list, info.person_id])
    .then(() => {
        res.sendStatus(201); // created
    }).catch(error => {
        console.log('error posting band info', error);
        res.sendStatus(500);
    });
}); // end POST request


// PUT request to update user's band information
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    // find user by id and update their information with new user input data
    pool.query(`UPDATE "band_info" SET "name"=$1, "tech_rider"=$2, "band_rider"=$3, "stage_plot"=$4, "input_list"=$5
                WHERE "person_id"=$6;`, [body.name, body.tech_rider, body.band_rider, body.stage_plot, body.input_list, id])
    .then(() => {
        res.sendStatus(200); // all good if it worked
    }).catch(error => {
        console.log('Error putting new information', error);
        res.sendStatus(500);
    });
});

// exports
module.exports = router;