import React, { useState } from 'react'
import SideBar from './components/SideBar'
import './App.css'
import NewTask from './components/NewTask'
import CreateTask from './components/CreateTask'

function App() {
  const [toDoState, setToDoState] = useState(0)

  return (
    <>
      <header>

      </header>
      <main>
        <SideBar />
        {}
        <NewTask />
        <CreateTask />
      </main>
    </>
  )
}

export default App