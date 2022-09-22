import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
const App = () => {
  const stageCanvasRef = useRef(null)

  // useEffect will run on stageCanvasRef value assignment
  useEffect(() => {
    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    if (stageCanvasRef.current) {
      let height = stageCanvasRef.current.offsetHeight
      let width = stageCanvasRef.current.offsetWidth
      console.log(height, width)
    }
  }, [stageCanvasRef])
  return (
    <div className='app' ref={stageCanvasRef}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
