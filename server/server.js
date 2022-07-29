const express = require('express')
const Router = require('express-promise-router')
var bodyParser = require('body-parser')
const app = express()
const router = Router()
app.use(router)
var jsonParser = bodyParser.json()


const attributes = ["ds", "subject", "language", "algorithm", "class"]
const { Pool } = require('pg')
const pool = new Pool()

app.post('/search', jsonParser, async (req, res) => {
    console.log(req.body)
    const cond_ = []
    for (const a in req.body) {
        if (req.body[a] !== null) {
            cond_.push(`SELECT DISTINCT exercise_path FROM exercise_${a} WHERE ${a}_name in ('${req.body[a].join("','")}')`)
        }
    }
    const query = cond_.join(" INTERSECT ")
    console.log(`query: ${query}`)
    const { rows } = await pool.query(query)
    res.send(rows)
})

app.get('/exercise', async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM exercise WHERE path='${req.query.path}';`)
    console.log(rows)
    res.send(rows)
})

app.get('/values/:table', async (req, res) => {
    const { rows } = await pool.query(`SELECT DISTINCT name FROM ${req.params.table};`)
    res.send(rows)
})

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})

app.use(express.static('public'))
