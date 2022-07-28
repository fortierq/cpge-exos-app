const express = require('express')
const Router = require('express-promise-router')
const app = express()
const router = Router()
app.use(router)

const { Pool } = require('pg')
const pool = new Pool()

app.get('/search', async (req, res) => {
    const { rows } = await pool.query(`SELECT exercise_path FROM exercise_subject WHERE subject_name='${req.query.subject}';`)
    res.send(rows)
})

app.get('/exercise', async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM exercise WHERE path='${req.query.path}';`)
    console.log(rows)
    res.send(rows)
})

app.get('/subjects', async (req, res) => {
    const { rows } = await pool.query('SELECT DISTINCT name FROM subject;')
    res.send(rows)
})

app.get('/ds', async (req, res) => {
    const { rows } = await pool.query('SELECT DISTINCT name FROM ds;')
    res.send(rows)
})

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})

app.use(express.static('public'))
