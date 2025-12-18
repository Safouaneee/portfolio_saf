import { useState } from "react"

function Afficher_type({typecontent}){
    let  type=""
    if(typecontent==""){
       type= ""
    }
    else if(typecontent=="fruit"){
       type= "fruit"

    }
    else if(typecontent=="legume"){
       type= "legume"
    }
    else{
       type= "not found"
    }

    return(
        <div style={{height:"100px",width:"150px",backgroundColor:"gray",padding:"15px"}}>
            <h4>type :{type} </h4>
        </div>
    )

}
export default Afficher_type