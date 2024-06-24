import React, { forwardRef } from 'react'

const TaskMenu = forwardRef(function TaskMenu({ deleteTask, deleteStep, addStep, steps, title, date, desc }, ref) {
    return (
        <div className='container'>
            <button onClick={deleteTask}>Delete Task</button>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
            <div className='miniContainer'>
                <label htmlFor="">Steps to Completion</label>
                <input type="text" ref={ref} />
                <button onClick={addStep}>Add</button>
            </div>
            <ul className='steps'>
                {steps.length === 0 ?
                    <p>No action plan yet</p> :
                    steps.map((step, index) => (
                        <div className='step-item'>
                            <li key={index}>{step}</li>
                            <button onClick={() => deleteStep(index)}>Delete step</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
})

export default TaskMenu
