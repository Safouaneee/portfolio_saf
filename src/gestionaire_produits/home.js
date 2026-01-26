import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setList } from "./sliceStore"

function Home(){
    const [nom,setNom]=useState("")
    const [qt,setQt]=useState("")
    const [liste,setlist]=useState([])
    const dipatcher = useDispatch()
    const [mod,setmod]=useState(false)
    const List = useSelector(state=>state.produits.List)
    
    
    function Ajouter(){
        
        const newPr={
            nom:nom,
            qt:qt
        }
        setlist([...liste,newPr])
        
        setNom("")
        setQt("")
    }
    dipatcher(setList(liste))
    



    return(

        <div>
            <h1>Gestionnaire de Produits </h1>
            <input value={nom} onChange={(e)=>setNom(e.target.value)} className="form-control w-50 m-3 "placeholder="nom" ></input>
            <input value={qt} onChange={(e)=>setQt(e.target.value)} className="form-control w-50 m-3 "placeholder="quantite" ></input>
            <button onClick={Ajouter} className="btn btn-primary">Ajouter</button>
            {mod && (
                List.map((elm)=>(

            <div className="m-5">
                <p><input vlaue={elm.nom} ></input></p><span><input value={elm.qt}></input></span>
                <button className="btn btn-primary">enregistrer</button>


            </div>
            )))}
            {List.map((elm)=>(

            <div className="m-5">
                <p>{elm.nom}</p><span>{elm.qt}</span>
                <button onClick={setmod(true)} className="btn btn-primary">modifier</button>
                <button className="btn btn-danger">supprimmer</button>


            </div>
            ))}
            
        </div>
    )

}export default Home