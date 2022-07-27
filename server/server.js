const express = require('express')
const Router = require('express-promise-router')
const app = express()
const router = Router()
app.use(router)

const cors = require('cors');
app.use(cors({
    origin: 'https://mozilla.github.io',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
}));

const { Pool } = require('pg')
const pool = new Pool()

app.get('/search', async (req, res) => {
    const { rows } = await pool.query("SELECT exercise_path FROM exercise_subject WHERE subject_name='graph';")
    res.send(rows)
})

app.get('/subjects', async (req, res) => {
    const { rows } = await pool.query('SELECT DISTINCT name FROM subject;')
    res.send(rows)
})

app.get('/id', async (req, res) => {
    const { rows } = await pool.query('SELECT path FROM exercise;')
    res.send(rows[0])
})

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})

app.use(express.static('public'))
