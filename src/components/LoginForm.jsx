import { useState } from "react"

const LoginForme = () =>{

    const[username, setUsername] = useState() 
    const [password, setPassword] = useState()

   
    const handleclick = () =>{
        return alert(username ,password)
    }

    return(
        <>
        <form onSubmit={handleclick}>
            <label htmlFor="username">username</label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">CLICK</button>
        </form>
        </>
    )
}

export default LoginForme