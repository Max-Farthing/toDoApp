import React, { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.post.length; i++) {
          data.post[i] = { ...data.post[i], id: data.post[i]._id }
        }
        setTasks(data.post)
      })
      .catch(err => console.log(err))
  }, [])

  function changeRenderState(id) {
    setToDoState(id)
  }

  function addTask() {
    const newTask = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      description: descRef.current.value,
      steps: []
    }

    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response not ok")
        }
        return response.json()
      })
      .then(data => {
        const taskId = data.post._id
        console.log(taskId)
        setTasks(oldTasks => {
          return [...oldTasks, { ...newTask, id: taskId }]
        })
        setToDoState(0)

        titleRef.current.value = ''
        dateRef.current.value = ''
        descRef.current.value = ''
      })
      .catch(err => console.log(err))
  }

  function deleteTask() {
    let index = tasks.findIndex(t => t.id === taskId)
    const postId = tasks[index].id
    fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    })
      .then(response => {
        if (response.ok) {
          setToDoState(0)
          setTasks(oldTasks => {
            const newTasks = [...oldTasks]
            newTasks.splice(index, 1)
            return newTasks
          })
        } else {
          console.log("Error deleting post")
        }
      })
      .catch(err => console.log(err))

  }

  function selectTask(taskId) {
    setToDoState(2)
    setTaskId(taskId)
  }

  function addStepsToTask() {
    const step = stepRef.current.value
    let index = tasks.findIndex(t => t.id === taskId)
    const postId = tasks[index].id
    // console.log(postId)

    fetch(`/api/posts/${postId}/steps`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: step })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTasks(oldTasks => {
          const newTasks = [...oldTasks]
          const updatedtask = {
            ...newTasks[index],
            steps: [...newTasks[index].steps, step]
          }
          newTasks[index] = updatedtask

          stepRef.current.value = ''
          return newTasks
        })
      })
      .catch(err => console.log(err))

  }

  function deleteStepsFromTask(index) {
    let idx = tasks.findIndex(t => t.id === taskId)
    const postId = tasks[idx].id

    fetch(`/api/posts/${postId}/steps/${index}`, {
      method: "DELETE"
    })
      .then(response => {
        setTasks(oldTasks => {
          const newTasks = [...oldTasks]
          const updatedTask = {
            ...newTasks[idx],
            steps: [...newTasks[idx].steps]
          }
          updatedTask.steps.splice(index, 1)
          newTasks[idx] = updatedTask

          return newTasks
        })
      })
      .catch(err => console.log(err))
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
        deleteTask={deleteTask}
        deleteStep={deleteStepsFromTask}
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
      <main>
        <SideBar changeRender={changeRenderState} tasks={tasks} selectTask={selectTask} />
        {render}
      </main>
    </>
  )
}

export default App