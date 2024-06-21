import React from 'react'

export default function SideBar({selectTask, changeRender, tasks}) {
  return (
    <ul className='sidebar'>
        <li key="login"><a href="">Log in</a></li>
        <li key="addTask"><button onClick={() => changeRender(1)}>Add a new Task</button></li>
        {tasks.map(task => (
          <li key={task.id}><button onClick={() => selectTask(task.id)}>{task.title}</button></li>
        ))}
    </ul>
  )
}

