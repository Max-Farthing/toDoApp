import React, { useRef, useState } from 'react'
import SideBar from './components/SideBar'
import './App.css'
import NewTask from './components/NewTask'
import CreateTask from './components/CreateTask'
import TaskMenu from './components/TaskMenu'

function App() {
  const [toDoState, setToDoState] = useState(0)
  const [tasks, setTasks] = useState([])
  const [taskId, setTaskId] = useState(0);
  const titleRef = useRef('')
  const dateRef = useRef('')
  const descRef = useRef('')
  const stepRef = useRef('')

  function changeRenderState(id) {
    setToDoState(id)
  }

  function addTask() {
    const newTask = {
      id: Math.random(),
      title: titleRef.current.value,
      date: dateRef.current.value,
      desc: descRef.current.value,
      steps: []
    }

    setToDoState(0)

    setTasks(oldTasks => {
      return [...oldTasks, newTask]
    })

    titleRef.current.value = ''
    dateRef.current.value = ''
    descRef.current.value = ''
  }

  function selectTask(taskId) {
    setToDoState(2)
    setTaskId(taskId)
  }

  function addStepsToTask() {
    const step = stepRef.current.value
    setTasks(oldTasks => {
      console.log(step)
      let index = tasks.findIndex(t => t.id === taskId)
      const newTasks = [...oldTasks]
      const updatedtask = {
        ...newTasks[index],
        steps: [...newTasks[index].steps, step]
      }
      newTasks[index] = updatedtask
      
      return newTasks
    })
    stepRef.current.value = ''
  }

  let render;
  switch (toDoState) {
    case 0:
      render = <NewTask changeRender={changeRenderState} />
      break;
    case 1:
      render = <CreateTask cancelTask={changeRenderState} addTask={addTask} ref={{ titleRef, dateRef, descRef }} />
      break;
    case 2:
      let task = tasks.find(t => t.id === taskId);
      render = <TaskMenu
        addStep={addStepsToTask}
        title={task.title}
        date={task.date}
        desc={task.desc}
        steps={task.steps}
        ref={stepRef}
      />
      break;
    default:
      render = <NewTask changeRender={changeRenderState} />
  }

  return (
    <>
      <header>

      </header>
      <main>
        <SideBar changeRender={changeRenderState} tasks={tasks} selectTask={selectTask} />
        {render}
      </main>
    </>
  )
}

export default App