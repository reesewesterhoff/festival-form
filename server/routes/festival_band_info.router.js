const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let response = req.body;
    pool.query(`INSERT INTO "festival_band_info" ("arrival_time", "band_info_id", 
                "band_rider", "festival_id", "input_list", "name", "notes", "requests",
                "stage_plot", "tech_rider")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [response.arrival_time, 
                response.band_info_id, response.band_rider, response.festival_id, 
                response.input_list, response.name, response.notes, response.requests, 
                response.stage_plot, response.tech_rider])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error posting', error);
        res.sendStatus(500);
    });
});

module.exports = router;