import React, { forwardRef } from 'react'

const CreateTask = forwardRef(function CreateTask({cancelTask, addTask}, ref) {
    return (
        <div className='container createTask'>
            <button onClick={() => cancelTask(0)}>Cancel</button>
            <div className='miniContainer'>
                <label htmlFor="">Title</label>
                <input type="text" ref={ref.titleRef} />
            </div>
            <div className='miniContainer'>
                <label htmlFor="">Date</label>
                <input type="date" ref={ref.dateRef} />
            </div>
            <div className='miniContainer'>
                <label htmlFor="">Description</label>
                <textarea name="" id="" ref={ref.descRef}></textarea>
            </div>
            <button onClick={addTask}>Create Task</button>
        </div>
    )
})

export default CreateTask;