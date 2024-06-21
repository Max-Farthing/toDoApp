import React, { useRef, useState } from 'react'
import SideBar from './components/SideBar'
import './App.css'
import NewTask from './components/NewTask'
import CreateTask from './components/CreateTask'

function App() {
  const [toDoState, setToDoState] = useState(0)
  const [tasks, setTasks] = useState([])
  const titleRef = useRef('')
  const dateRef = useRef('')
  const descRef = useRef('')

  function changeRenderState(id) {
    setToDoState(id)
  }

  function addTask() {
    const newTask = {
      id: Math.random(),
      title: titleRef.current.value,
      date: dateRef.current.value,
      desc: descRef.current.value
    }

    setToDoState(0)
    
    setTasks(oldTasks => {
      return [...oldTasks, newTask]
    })

    titleRef.current.value = ''
    dateRef.current.value = ''
    descRef.current.value = ''
  }

  let render;
  switch (toDoState) {
    case 0:
      render = <NewTask changeRender={changeRenderState} />
      break;
    case 1: 
      render = <CreateTask cancelTask={changeRenderState} addTask={addTask} ref={{titleRef, dateRef, descRef}} />
      break;
    case 2:
      render = <p>Future toDo Task</p>
      break;
    default:
      render = <NewTask changeRender={changeRenderState} />
  }

  return (
    <>
      <header>

      </header>
      <main>
        <SideBar changeRender={changeRenderState} tasks={tasks} />
        {render}
      </main>
    </>
  )
}

export default App