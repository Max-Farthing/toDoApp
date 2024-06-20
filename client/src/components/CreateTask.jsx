import React from 'react'

export default function CreateTask() {
    return (
        <div className='container createTask'>
            <div className='miniContainer'>
                <label htmlFor="">Title</label>
                <input type="text" />
            </div>
            <div className='miniContainer'>
                <label htmlFor="">Date</label>
                <input type="date" />
            </div>
            <div className='miniContainer'>
                <label htmlFor="">Description</label>
                <textarea name="" id=""></textarea>
            </div>
            <button>Create Task</button>
        </div>
    )
}