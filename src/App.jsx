import { useState } from 'react'
import Home from './components/Home'
import SearchBox from './components/SearchBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox/>
      <Home/>
    </>
  )
}

export default App
