// server/routes/festival_band_info.router.js

// requires
const express = require('express');
const pool = require('../modules/pool');

// create router
const router = express.Router();

// GET request to database 
router.get('/:id', (req, res) => {
    // find festival by id and return that festival's respondents information
    pool.query(`SELECT * FROM "festival_band_info"
                WHERE "festival_id"=$1`, [req.params.id])
    .then(results => {
        // if all goes well send back festival information
        res.send(results.rows);
    }).catch(error => {
        console.log('Error getting festival respondents', error);
        res.sendStatus(500);
    });
}); // end GET request


// POST request to database
router.post('/', (req, res) => {
    let response = req.body;
    // make new row with the festival respondent's information in "festival_band_info" table
    pool.query(`INSERT INTO "festival_band_info" ("arrival_time", "band_info_id", 
                "band_rider", "festival_id", "input_list", "name", "notes", "requests",
                "stage_plot", "tech_rider")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [response.arrival_time, 
                response.band_info_id, response.band_rider, response.festival_id, 
                response.input_list, response.name, response.notes, response.requests, 
                response.stage_plot, response.tech_rider])
    .then(() => {
        res.sendStatus(201); // created
    }).catch(error => {
        console.log('error posting', error);
        res.sendStatus(500);
    });
}); // end POST request


// DELETE request
router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    // find respondent by id and delete from "festival_band_info" table
    pool.query(`DELETE FROM "festival_band_info" WHERE "id"=$1`, [id])
    .then(() => {
        res.sendStatus(200); // all good
    }).catch(error => {
        console.log('Error deleting fest respondent', error);
        res.sendStatus(500);
    });
}); // end DELETE request


// exports
module.exports = router;