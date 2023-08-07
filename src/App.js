import './App.css';
import {useState} from "react"


function App() {
  const [inputValue,setInputValue]=useState("")
  const [hidden,setHidden]=useState(60)
  const [message,setMessage]=useState("")

     const handleChange=()=>{
        if (inputValue === hidden){
            console.log("That is correct")
            setMessage("This is correct")
          }else if (inputValue > hidden){
            console.log("Your Number is GREATER THAN the actual number")
            setMessage("Your Number is GREATER THAN the actual number")
          }else {
            console.log("Your number is LESS THAN the actual number")
            setMessage("Your number is LESS THAN the actual number")
          }
     } 

     const handleReset=()=>{
        if (hidden <= 100){
          setHidden(hide=>hide + 10)
        }else {
          setHidden(hide=>hide-10)
        }

        setInputValue("")
     }

  return (
    <div className="App">
      <header>
        <h1>Guess the Number</h1>
      </header>
      <div>
      Guess a Number between 0-100
      </div>
      <div>
        <input value={inputValue} onChange={(e)=>setInputValue(Number(e.target.value))}type="text" />
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleChange}>Check</button>
      </div>
      <div className="app-message">
         {message}
      </div>
      
    </div>
  );
}

export default App;
