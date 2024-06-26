const Task = require('../models/task')
const User = require('../models/user')

exports.getPosts = (req, res, next) => {
    Task.find()
        .then(posts => {
            res.status(200).json({
                message: 'All posts grabbed',
                post: posts
            })
        })
        .catch(err => console.log(err))
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

exports.addStep = (req, res, next) => {
    const postId = req.params.postId
    const newStep = req.body.content
    Task.findById(postId)
        .then(post => {
            post.steps.push(newStep)
            return post.save()
        })
        .then(updatedTask => {
            res.status(200).json({message: "Step added", post: updatedTask })
        })
        .catch(err => console.log(err))
}

exports.deleteStep = (req, res, next) => {
    const postId = req.params.postId
    const stepIndex = req.params.stepId
    Task.findById(postId)
        .then(task => {
            task.steps.splice(stepIndex, 1)
            return task.save()
        })
        .then(updatedTask => {
            res.status(200).json({message: "Step deleted", post: updatedTask})
        })
        .catch(err => console.log(err))
        
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId
    Task.findByIdAndDelete(postId)
        .then(result => {
            res.status(200).json({
                message: 'Task deleted',
                post: result
            })
        })
        .catch(err => console.log(err))
}