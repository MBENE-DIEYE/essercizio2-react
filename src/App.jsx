import { useEffect, useState } from "react"

const App = () => {
 
     const [counter , setCounter] = useState(0)
     const handleclick = () =>{
         setCounter((_counter) =>{
             return _counter + 1
         })
     }

     const handleclickerDecrementa = () =>{
         setCounter((_counter) =>{
             return _counter - 1
         })
     }
     const handleclickReset = () =>{
         setCounter((_counter) =>{
             return 0 
         })
     }

     useEffect(() => {
      console.log("effect 1")
     })
     
     useEffect(() => {
      console.log("effect 2")
     }, [counter])
 
     return(
         <>
         <div>{"Count : 0"}</div>
         <button onClick={handleclick}>CLICK</button>
         <button onClick={handleclickerDecrementa}>CLICKER</button>
         <button onClick={handleclickReset}>RESET</button>
         <p>counter:{counter}</p>
       
         </>
     )
    
}

export default App
