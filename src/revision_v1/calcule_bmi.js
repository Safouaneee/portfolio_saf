import { useState } from "react"
import Form_bmi from "./form_bmi"
import Result from "./result"

function Calculate_bmi(){
     
    const[height,setheight]=useState("")
    const[weight,setweight]=useState("")
    const[bmi,setbmi]=useState("")
    const[message,setmassage]=useState("")

    function calculate(){
        const h=Number(height)
        const w=Number(weight)

        const height_mt=h/100

       
        setbmi(w/height_mt)

        
        
        if(bmi<18.5){
            setmassage("insuffissante pondereale")
        }
        else if(bmi<25){
            setmassage("poids normal")
        }
        else if(bmi<30){
            setmassage("poids surpoids")
        }
        else if(bmi>=30){
            setmassage("poids obesite")
        }
        else{
            setmassage("")
        }
    }

    function Reset_form(){
        setweight("")
        setheight("")
        setmassage("")
        setbmi("")
    }

    return(
       <div>
            <Form_bmi weight={weight} setweight={setweight} height={height} setheight={setheight}/>
            <button onClick={calculate}>Calculate</button>
            <button onClick={Reset_form}>reset</button>
            <Result bmi={bmi} message={message}/>
       </div>
    )
}
export default Calculate_bmi