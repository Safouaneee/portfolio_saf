import { useState } from "react"

function Form({table,settable}){
    const [list,setlist]=useState({
        nom:"",
        email:"",
        university:"",
        loisirs:[],


    }) 

    const [error,seterror]=useState({})



    function handlechange(e){
        const {name,type,value,checked}=e.target

        if(type=="checkbox"){
            if(checked){
                setlist({...list,loisirs:[...list.loisirs,value]})
                
            }
            else{
                setlist({...list,loisirs:list.loisirs.filter(elm=>elm!==value)})
            }
        }
        else{
            setlist({...list,[name]:value})
        }



    }
    function handlesubmit(e){
        e.preventDefault()
        let valid =true
        const newerror={}

        if(!list.nom ||list.nom.length<4){
            valid=false
            newerror.nom="invalid nom"
            

        }
        if(!list.email){
            valid=false
            newerror.email="invalid email"
            
        }
        if(!list.university){
            valid=false
            newerror.university="invalid university"
            
        }
        if(list.loisirs.length==0){
            valid=false
            newerror.loisirs="invalid loisirs"
            
        }
        seterror(newerror)
        

        if(valid){
            const eleve={
                nom:list.nom,
                email:list.email,
                university:list.university,
                loisirs:list.loisirs
            }
            settable([...table,eleve])

        }
        else{
            e.preventDefault()
        }





    }


    return(
        <div className="container"> 
            <form onSubmit={handlesubmit}>

                <h3>Formulaire d'inscription </h3>

                <input className="form-control w-50 my-3" type="text" name="nom" placeholder="Nom"  onChange={handlechange}/><span>{error.nom}</span>

                <input className="form-control w-50 my-3" type="email"  name="email" placeholder="Email " onChange={handlechange}/><span>{error.email}</span><br></br>

                <input className=" my-3" type="radio" name="university" value={"la_fac"} onChange={handlechange}/>La fac 
                <input className=" my-3" type="radio" name="university" value={"Ofppt"} onChange={handlechange}/>Ofppt <span>{error.university}</span> <br/> 

                 <input className=" my-3" type="checkbox" name="sport" value={"sport"} onChange={handlechange}/>sport 
                 <input className=" my-3" type="checkbox" name="music" value={"music"} onChange={handlechange}/>music
                 <input className=" my-3" type="checkbox" name="voayage" value={"voayage"} onChange={handlechange}/>voayage <span>{error.loisirs}</span><br></br>


                <input type="submit" className="btn btn-primary mb-4" value={"Envoyer"}/>



            </form>
        </div>

    )
}
export default Form
