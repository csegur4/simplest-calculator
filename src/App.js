import { useState,useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    inputRef.current?.focus();
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current?.focus(); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));  
    inputRef.current?.focus();
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    console.log(inputRef.current.value);
    Number(inputRef.current.value) === 0 ? setResult('Error') : setResult((result) => result / Number(inputRef.current.value)); 
    inputRef.current?.focus();
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;  
    inputRef.current?.focus();
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0); 
    inputRef.current?.focus();
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          autoFocus={true}
          
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
