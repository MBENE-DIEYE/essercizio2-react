import { useRef } from "react";

 const UncontrolledInput = () =>{

const inputRef = useRef();
const handleclick = () =>{
    alert("valore corrente dell'input:"+   inputRef.current.value)
}
    return(
        <>
        <form onSubmit={handleclick}>
            <label htmlFor="teto">testo</label>
            <input type="text" name="testo"  id="testo" ref={inputRef}/>
            <button type="submit">click</button>
        </form>
        </>
    )
 }
 export default UncontrolledInput