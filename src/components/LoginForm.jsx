import { useState } from "react"

const LoginForme = () =>{

    const[username, setUsername] = useState() 
    const [password, setPassword] = useState()

   
    const handleclick = (event) =>{
        event.preventDefault()
         alert(username ,password)
    }

    return(
        <>
        <form onSubmit={handleclick}>
            <label htmlFor="username">username</label>
            <input type="text" id="username" name="username"value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">CLICK</button>
        </form>
        </>
    )
}

export default LoginForme