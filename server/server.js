const Router = require('express-promise-router')
const { Pool } = require('pg')

const pool = new Pool()

const express = require('express')

const app = express();
const router = Router();
app.use(router);

router.get('/id', async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT path FROM exercise;')
    res.send(rows[0])
})

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})