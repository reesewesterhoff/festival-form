const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "festival";`)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log('error getting festivals', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let festival = req.body;
    pool.query(`INSERT INTO "festival" ("name", "date", "image", "address")
                VALUES ($1, $2, $3, $4);`, [festival.name, festival.date, festival.image, festival.address])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error posting new festival', error);
        res.sendStatus(500);
    });
});


router.delete('/:id', (req, res) => {
    let id = req.params.id;
    pool.query(`DELETE FROM "festival" WHERE "id"=$1`, [id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error deleting festival', error);
        res.sendStatus(500);
    });
});

module.exports = router;