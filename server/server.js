require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

const postController = require('./controllers/posts')

//getting tasks
app.get("/api/posts", postController.getPosts)

//posting tasks
app.post("/api/posts", postController.createPost)

//deleting tasks
app.delete("/api/posts/:postId", postController.deletePost)

const databaseConnection = process.env.DATABASE_URL
mongoose
    .connect(
        databaseConnection
    )
    .then(result => {
        app.listen(5000, () => console.log("server started on port 5000"))
    })
    .catch(err => console.log(err))