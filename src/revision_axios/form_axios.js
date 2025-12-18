import { useState } from "react"
import axios from "axios"
import Main from "./main"

function Form_axios({data_etd}){

    const [form,setform]=useState({
        nom:"",
        loisirs:[],
        moyenne:""
    })

    function handlechange(e){
        const {name,type,checked,value}=e.target

        if(type=="checkbox"){
            if(checked){
                setform({
                    ...form,loisirs:[...form.loisirs," ",value]
                })
            }
            else{
                setform({
                    ...form,loisirs:form.loisirs.filter(elm=>elm!==value)
                })
            }
        }
        else{
            setform({
                ...form,[name]:value
            })
        }
    }


    function handlesubmit(e){
        e.preventDefault()
        if(!form.nom||!form.loisirs|| !form.moyenne){
            return
        }
        else{
            const new_etd={
                id:String(data_etd.length+1),
                nom:form.nom,
                loisirs:form.loisirs,
                moyenne:form.moyenne
            }
            axios.post("http://localhost:4400/data",new_etd)
            .then(()=>{
                alert("etudiant ajouter avec success")
            })
            .catch(()=>{
                alert("etudiant non ajouter")
            })
        }

    }

    return(
        <div>
            <Main/>

        <form onSubmit={handlesubmit} className="form ">
            <input name="nom" onChange={handlechange} className="form-control w-50 m-3 p-2" type="text" placeholder="enter nom" ></input>

            <input className="mx-2" name="loisirs" type="checkbox" onChange={handlechange}  value={"voyage"} />voyage
            <input className="mx-2" name="loisirs" type="checkbox" onChange={handlechange}  value={"sport"} />sport 
            <input className="mx-2" name="loisirs" type="checkbox" onChange={handlechange}  value={"music"} />music 

            <input name="moyenne" onChange={handlechange} className="form-control w-50 m-3 p-2" type="number" placeholder="enter moyenne" ></input>

            <button className="btn btn-primary m-2" type="submit" >ajouter</button>

        </form>
        </div>

    )

}export default Form_axios