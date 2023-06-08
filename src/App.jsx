import { useState } from 'react'
import ShaderCanvas from './components/ShaderCanvas'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <ShaderCanvas/>
      <Navigation/>
      <h1 className='banner'>👷‍♂️ Website Under Construction... 🚧</h1>
    </>
  )
}

export default App
