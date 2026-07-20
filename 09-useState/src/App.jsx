import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num+1)
  }
   function DeccreaseNum(){
    setnum(num-1)
  }
   function increase10Num(){
    setnum(num+10)
  }
  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={increaseNum}> Increase </button>
      <button onClick={DeccreaseNum}> Decrease </button>
      <button onClick={increase10Num}> Increase10num </button>
    </div>
  )
}

export default App
