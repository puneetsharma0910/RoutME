import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Home from './components/home/Home'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  )
}

export default App
