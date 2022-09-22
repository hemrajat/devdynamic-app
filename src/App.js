import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
