import { useState } from "react"

function Input({value,setvalue}){
    function handlechange(e){
        setvalue(e.target.value)
        
    }

    return(
        <div>
            <input type="number" value={value} onChange={handlechange}></input>
        </div>
    )


}export default Input