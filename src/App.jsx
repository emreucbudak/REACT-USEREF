
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [inputV,setInputV] = useState("")
  const cnt = useRef(0)
  useEffect(() => {
    cnt.current = cnt.current+1;
  })

  return (
    <>
    <div>
      <input type="text" value={inputV} onChange={(e) => {
        setInputV(e.target.value)
      }}/>
      <p>Benim Adım  {inputV}</p>
      <p>{cnt.current} defa renderledim</p>
    </div>

    </>
  )
}

export default App
