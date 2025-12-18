import { useState } from "react"
import Input from "./input"
import Result from "./result"


function Converter(){
      const [celsius,setcelsius]=useState("")
      const [fahr,setfahr]=useState("")
      const [status,setstatus]=useState("")



      function convert(){

        if(celsius==0||celsius==""){
             setfahr("")
        }
        else{
          setfahr((celsius*9/5)+32)

        }
      }
      function getstatus(){

          if(celsius==0){
            return ""
          }
          else if(celsius<25){
            return "normal"
          }
          else if(celsius>25){
            return "chaud "
          }
          else if(celsius<10){
            return "froit"
          }
      }
      function reset(){
        setcelsius("")
        setfahr("")
      }

      return(
        <div>
            <h1>convertir de fahr</h1>
            <Input setvalue={setcelsius}  value={celsius} />
            <button onClick={()=>{convert()}} >Convert</button>
            <button onClick={reset} >effacer</button>
            <Result fahr={fahr}/>
            <p> le statue est :{getstatus()} </p>
        </div>
      )


    

}export default Converter