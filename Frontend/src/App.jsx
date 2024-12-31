import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, Router} from 'react-router-dom'
import Heromodule from './Modules/Heromodule'
import Footer from './Modules/Footersection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Heromodule/>}></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
