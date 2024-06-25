const Task = require('../models/task')
const User = require('../models/user')

exports.getPosts = (req, res, next) => {

}

exports.createPost = (req, res, next) => {
    // let creator;
    const title = req.body.title
    const date = req.body.date
    const description = req.body.description
    const steps = req.body.steps || []
    const task = new Task({
        title,
        date,
        description,
        steps,
        // creator: req.userId
    })
    task
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Task created',
                post: result
            })
        })
        .catch(err => console.log(err))
}

exports.getPost = (req, res, next) => {

}

exports.updatePost = (req, res, next) => {

}

exports.deletePost = (req, res, next) => {
    
}