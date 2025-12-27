import { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Counter from '../Custom Hook/counter'
import Demo from '../Custom Hook/LocalStorage'
import { Outlet } from 'react-router-dom'
import Banner from './Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Outlet/>
    </>
  )
}

export default App
