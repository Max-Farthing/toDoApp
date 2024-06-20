import React from 'react'

export default function SideBar({changeRender, tasks}) {
  return (
    <ul>
        <li key="Login"><a href="">Log in</a></li>
        <li key="addTask"><button onClick={() => changeRender(1)}>Add a new Task</button></li>
        {tasks.map(task => (
          <li key={task.id}><button>{task.title}</button></li>
        ))}
    </ul>
  )
}

