import { useState } from "react"
import Formulaire from "./formulaire";
import Listes_employes from "./listes_employes";


function App_revision(){
   const [employes, setEmployes] = useState([
    { id: 1, nom: "Ali", poste: "Développeur", salaire: 8000 },
    { id: 2, nom: "Sara", poste: "Designer", salaire: 7000 },
    { id: 3, nom: "Youssef", poste: "Chef de projet", salaire: 10000 },
    { id: 4, nom: "Moura", poste: "Testeur", salaire: 6000 },
    { id: 5, nom: "Rachid", poste: "Comptable", salaire:7500}
  ]);

function supprimer(id){
     const filter =employes.filter((elm)=>elm.id !==id)
     setEmployes(filter)
     
}
function ajouter(new_employe){
    setEmployes([...employes,new_employe])
}



return(
    <div>
        <Formulaire employes={employes} setEmployes={setEmployes} ajouter={ajouter}/>
        <Listes_employes supprimer={supprimer}  employes={employes}/>
      
    </div>
)
   
    
}
export default App_revision