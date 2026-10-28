import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(5)
  //let counter = 5;

  const addValue = () =>{
    console.log("clicked" , counter)
   // counter = counter + 1
    if(counter <20){
      setCounter(counter +1)
    }
  }

  const removeValue = () =>{
    if(counter >1){
      setCounter(counter - 1)
    }
    
  }

  return(
    <>
      <h1>Chai aur reacct</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )

 
}

export default App
