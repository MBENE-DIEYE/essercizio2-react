import { useState } from "react"

const TextInput = () =>{

const [data, setData] = useState()

    return(
        <>
       <form >
         <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" value={data} onChange={setData} />
       </form>
        </>
    )
}

export default TextInput