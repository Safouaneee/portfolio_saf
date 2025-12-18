import { useState } from "react"
import { useEffect } from "react";

function Listes_employes({employes,supprimer}){

    const[vr,setvr]=useState(employes)
    
    useEffect(() => {
       setvr(employes);
   }, [employes]);
   // drna useeffect 7it  drna employee fstate dkchi 3lach makatblch kola zdna chi wahad y3ni kon mdrnach state odrna employe fchi variable 3adi radi tbda tbdl yak

    function handleshow(){
        setvr(employes)
    }
    function handlehide(){
        setvr([])
    }
   
    return(
        <div>
            <button onClick={handlehide}>hide</button>
            <button onClick={handleshow}>show</button>

        <table className="table table-triped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>poste</th>
                    <th>salaire</th>
                    <th>Actions</th>

                </tr>

            </thead>
            <tbody>
                {vr.map((elm)=>(
                    <tr>
                        <td>{elm.id}</td>
                        <td>{elm.nom}</td>
                        <td>{elm.poste}</td>
                        <td>{elm.salaire}</td>
                        <td><button onClick={(e)=>supprimer(elm.id)}  className="btn btn-danger">supprimer</button></td>

                    </tr>
                ))}

            </tbody>
        </table>
        </div>
    )

}
export default Listes_employes