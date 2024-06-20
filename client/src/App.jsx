import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("api")
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <div>{typeof data.test === 'undefined' ? <p>Error fetching</p> : <p>{data.test}</p>}</div>
  )
}

export default App