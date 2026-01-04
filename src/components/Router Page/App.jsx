import { useContext, useState } from 'react'
import Home from './Home'
import Navbar from '../Navbar'
import Counter from '../../Custom Hook/counter'
import Demo from '../../Custom Hook/LocalStorage'
import { Outlet } from 'react-router-dom'
import Category from '../Categories'
import { Filter, FilterContext } from '../../useContext/categoryContext'

function App() {
  return (
    < >
      <Navbar/>
      <Category/>
      <Outlet/>
    </>
  )
}

export default App
