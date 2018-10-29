// server/routes/festival.router.js

// requires
const express = require('express');
const pool = require('../modules/pool');
// create router
const router = express.Router();

// GET request
router.get('/', (req, res) => {
    // get all festivals from "festival" table, order festivals by soonest to occur
    pool.query(`SELECT * FROM "festival" ORDER BY "date";`)
    .then(results => {
        // send client all festivals if all goes well
        res.send(results.rows);
    }).catch(error => {
        console.log('error getting festivals', error);
        res.sendStatus(500);
    });
}); // end GET request


// POST request
router.post('/', (req, res) => {
    let festival = req.body;
    // make new row in "festival" table with information from inputs on DOM
    pool.query(`INSERT INTO "festival" ("name", "date", "image", "address")
                VALUES ($1, $2, $3, $4);`, [festival.name, festival.date, festival.image, festival.address])
    .then(() => {
        res.sendStatus(201); // created
    }).catch(error => {
        console.log('Error posting new festival', error);
        res.sendStatus(500);
    });
}); // end POST request


// DELETE request
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    // find festival by id and delete
    pool.query(`DELETE FROM "festival" WHERE "id"=$1`, [id])
    .then(() => {
        res.sendStatus(200); // all good
    }).catch(error => {
        console.log('Error deleting festival', error);
        res.sendStatus(500);
    });
}); // end DELETE request


// PUT request
router.put('/:id', (req, res) => {
    let body = req.body;
    // find festival by id and set values to new values from inputs on DOM
    pool.query(`UPDATE "festival" SET "name"=$1, "date"=$2, "address"=$3, "image"=$4
    WHERE "id"=$5;`, [body.name, body.date, body.address, body.image, req.params.id])
    .then(() => {
        res.sendStatus(200); // all good
    }).catch(error => {
        console.log('Error updating festival info', error);
        res.sendStatus(500);
    });
}); // end PUT request

// exports
module.exports = router;