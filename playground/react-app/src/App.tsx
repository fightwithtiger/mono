import { useState } from 'react'
import './App.css'
import { r } from '../../../packages/core/index'

function App() {
  const [count, setCount] = useState(r)

  return (
    <>
      <div>
        { count }
      </div>
    </>
  )
}

export default App
