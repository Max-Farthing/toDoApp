import React, { forwardRef } from 'react'

const TaskMenu = forwardRef(function TaskMenu({ addStep, steps, title, date, desc }, ref) {
    return (
        <div className='container'>
            <button>Delete</button>
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
                        <li key={index}>{step}</li>
                    ))
                }
            </ul>
        </div>
    )
})

export default TaskMenu
