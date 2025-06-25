import LoginForme from "./components/loginForm"
import TextInput from "./components/TextInput"
import { useEffect, useState } from "react"
import UncontrolledInput from "./components/UncontrolledInput"
import ItemList from "./components/ItemList"
// import Counter from "./Counter"


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
         <TextInput/>
        <LoginForme/>
        {/* <Counter/> */}
        <UncontrolledInput/>
        <ItemList/>
         <div>{"Count : 0"}</div>
         <button onClick={handleclick}>CLICK</button>
         <button onClick={handleclickerDecrementa}>CLICKER</button>
         <button onClick={handleclickReset}>RESET</button>
         <p>counter:{counter}</p>
       
         </>
     )
    
}

export default App
