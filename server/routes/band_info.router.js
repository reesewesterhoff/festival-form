const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "band_info"
                WHERE "person_id"=$1`, [req.user.id])
    .then(results => {
        res.send(results.rows[0]);
    }).catch(error => {
        console.log('Error getting band info', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let info = req.body;
    pool.query(`INSERT INTO "band_info" ("name", "tech_rider", "band_rider", "stage_plot", "input_list", "person_id")
                VALUES ($1, $2, $3, $4, $5, $6)`, [info.name, info.tech_rider, info.band_rider, info.stage_plot, 
                info.input_list, info.person_id])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error posting band info', error);
        res.sendStatus(500);
    });
});

module.exports = router;