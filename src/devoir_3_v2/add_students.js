import { useState } from "react"
import Main from "./main"
import axios from "axios";



function Add_students({data_etd,setdata_etd}){

    const [form,setform]=useState({
        nom:"",
        prenom:"",
        filiere:"",
        moyenne:"",
    })

    function handle_change(e){
        const {name,value,type}=e.target
        setform({
            ...form,[name]:value
        })

    }

    function handle_submit(e){
       e.preventDefault()
       if(!form.nom||!form.prenom||!form.filiere||!form.moyenne){
        e.preventDefault()
       }
       else{
        const new_etd={
            id:String(data_etd.length+1),
            nom:form.nom,
            prenom:form.prenom,
            filiere:form.filiere,
            moyenne:Number(form.moyenne)
        }
        

        axios.post("http://localhost:4200/etudiants",new_etd)
        .then(()=>{
            
            setdata_etd([...data_etd,new_etd])
            alert("ajouter avec success ")

        })
        .catch(()=>{
            alert("non ajouter")
        })


        setform({
                nom:"",
                prenom:"",
                filiere:"",
                moyenne:"",
        })
       }

    }

    return(
        <div className="form_etd">

            <Main></Main>
        <h1>+ Ajouter un Etudiant</h1>
        <form onSubmit={handle_submit}>
            <label>Nom</label>
            <input type="text" value={form.nom} placeholder="nom" onChange={handle_change} name="nom"></input>

            <label>Prenom</label>
            <input type="text"  value={form.prenom} placeholder="prenom" onChange={handle_change} name="prenom"></input>

            <label>Filiere</label>
            <input type="text"  value={form.filiere} placeholder="filiere" onChange={handle_change} name="filiere"></input>

            <label>Moyenne generale</label>
            <input type="text"  value={form.moyenne} placeholder="moyenne" onChange={handle_change} name="moyenne"></input>

            <button id ="sub"type="submit">envoyer</button>

        </form>
        </div>
            
    )



}export default Add_students