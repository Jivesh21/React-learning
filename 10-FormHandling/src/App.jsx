import React from 'react'

const App = () => {
const SubmitHandler= (Submit)=>{
  Submit.preventDefault()
  console.log("form submitted")
}
  return (
    <div>
      <input type='text' placeholder='Enter you Name'></input>
      <form onSubmit={(Submit)=>{
        SubmitHandler(Submit)
      }}>
      <button>
        Submit
      </button>
      </form>
    </div>
  )
}

export default App
