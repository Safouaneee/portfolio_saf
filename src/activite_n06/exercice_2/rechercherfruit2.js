import { useState } from "react"

function Rechercher2({settype}){

    const[val,setval]=useState()


    function afficher_type(e){

        setval(e.target.value)

    }
    function afficher(){

        settype(val)
    }


    return(
         <div style={{ margin: 'auto', padding: '10px', width: '300px', border: '1px solid  rgba(0,0,0,0.3) ', backgroundColor: ' rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)', borderRadius: '5px' }}>
                <h2 style={{ fontSize: '22px', margin: '20px 0', fontWeight: "bold" }}>  composant ChercherBar</h2>
                <label>Entrer le mot cle de recherche</label><br></br>

                <input onChange={(e) => afficher_type(e)} type="text" /><br></br>


                <button style={{ border: 'none', padding: '2px', margin: '3px 0' }} onClick={afficher} >chercher</button>


            </div>
           
    )

}
export default Rechercher2
