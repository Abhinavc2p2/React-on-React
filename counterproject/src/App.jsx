
import { useState } from 'react'
import './App.css'

function App() {
const [counter,setcounter]=useState(0);

const add=(()=>
setcounter(counter+1)
)

const  minus=(()=>{

  if(counter>0){
    
    setcounter(counter-1)
  }
}
)
  return (
    <>
     <p>Counter value :{counter}</p>
     <button onClick={add}>counter-up</button>
     <button onClick={minus}>counter-down</button>
     
    </>
  )
}

export default App
