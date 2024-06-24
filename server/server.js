require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.get("/", (req, res) => {
    res.json({ "test": ["Testing info sharing"] })
})

const databaseConnection = process.env.DATABASE_URL
mongoose
    .connect(
        databaseConnection
    )
    .then(result => {
        app.listen(5000, () => console.log("server started on port 5000"))
    })
    .catch(err => console.log(err))