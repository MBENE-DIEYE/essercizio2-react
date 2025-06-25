import { useState } from "react"

const TextInput = () =>{

const [input, setInput] = useState()
    return(
        <>
       <form >
         <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" />
       </form>
        </>
    )
}

export default TextInput