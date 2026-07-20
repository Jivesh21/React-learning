import React from 'react'
import "./App.css";
import card from './components/card';
const App = () => {
  return (
    <div>
      <div className='card'>
        <h2> Helllo Guys</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
      {card()}
    </div>
    
  )
}

export default App
