import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import './App.css'
import NewTask from './components/NewTask'

function App() {
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("api")
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data)
  //     })
  // }, [])

  return (
    // <div>{typeof data.test === 'undefined' ? <p>Error fetching</p> : <p>{data.test}</p>}</div>
    <>
      <header>

      </header>
      <main>
        <SideBar />
        <NewTask />
      </main>
    </>
  )
}

export default App