import React from 'react'

export default function NewTask({changeRender}) {
  return (
    <div className='container'>
        <h1>My Todo List</h1>
        <h3>Enter a new task for your ToDo List!</h3>
        <button onClick={() => changeRender(1)}>Add a new Task</button>
    </div>
  )
}