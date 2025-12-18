import { useState } from "react"

function Formulaire({employes,setEmployes,ajouter}){
    const[nom,setnom]=useState("")
    const[poste,setposte]=useState("")
    const[salaire,setsalaire]=useState("")

    function handlesubmit(e){
        e.preventDefault()
        if(!nom||!poste||!salaire){
            return
        }
        else{
            const new_employee={
                id:employes.length+1,
                nom:nom,
                poste:poste,
                salaire:salaire
            }
            ajouter(new_employee)
            
            setnom("")
            setposte("")
            setsalaire("")
        }
    }




    return(
        <form onSubmit={handlesubmit}>
            <label>Nom</label>
            <input className="form-control my-2 w-25" value={nom} type="text" onChange={(e)=>setnom(e.target.value)}></input>

            <label>poste</label>
            <input className="form-control my-2 w-25" value={poste} type="text" onChange={(e)=>setposte(e.target.value)}></input>

            <label>salaire</label>
            <input className="form-control my-2 w-25" value={salaire}type="text" onChange={(e)=>setsalaire(e.target.value)}></input>

            <input type="submit" value={"ajouter"}></input>
        </form>
    )

   
}
export default Formulaire