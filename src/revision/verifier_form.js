import { useState } from "react";

function Verifierf(){
    let [list,setlist]=useState([])
    const [form,setform]=useState({
        nom:"",
        genre:[],
        email:"",
        password:"",

    })

    const [err,setErr]=useState({
        err_nom:"",
        err_genre:"",
        err_email:"",
        err_password:""
    })

    function handlechange(e){
        const {name,value,checked,type}=e.target

        if(type=="checkbox"){
           if(checked){
            setform({...form,genre:[...form.genre,value]})
           }
           else{
            setform({...form,genre:form.genre.filter(l=>l!==value)})
           }
        }
        else{
            setform({...form,[name]:value})
        }

    }
    function handlesubmit(e){
        e.preventDefault()
        let newErr={}

        let valid =true
        if(!form.nom || form.nom.length<3){
            valid=false
            newErr.err_nom="nom Invalid !!"
        }
        if(form.genre.length==0){
            valid=false
            newErr.err_genre="genre Invalid !!"
        }
        if(!form.email){
            valid=false
            newErr.err_email="eamil Invalid !!"
        }
         if(!form.password || form.password.length<6){
            valid=false
            newErr.err_password="password Invalid !!"
        }
        setErr(newErr)

        if(valid){
            const pr ={
                nom:form.nom,
                genre:form.genre,
                email:form.email,
                password:form.password
            }
            setlist([...list,pr])
           
            


        }
        else{
            e.preventDefault()
            
        }
        

    }



    return(
        <div>
        <div  className="tb">
            <form  onSubmit={handlesubmit}>
                <input onChange={handlechange} type="text"  placeholder="nom" name="nom"/><span>{err.err_nom}</span>
                
                <input onChange={handlechange} type="checkbox" placeholder="genre"  name="etudiant"/> <span className="mx-3">etudiant</span><span>{err.err_genre}</span>
                <input onChange={handlechange} type="checkbox" placeholder="genre" name="stagaire"/> stagaire
                
                <input onChange={handlechange} type="text"  placeholder="email" name="email"/><span>{err.err_email}</span>

                <input onChange={handlechange} type="text"  placeholder="password" name="password"/><span>{err.err_password}</span>

                <input type="submit" className="btn btn-primary"/>

            </form>

           
        </div>
        <table className="table table-striped ">
            <thead>

            <tr>
                <th>nom</th>
                <th>genre</th>
                <th>email</th>
                <th>password</th>


            </tr>
            </thead>
            <tbody>

            {list.map((elm)=>{
                return(

             <tr>
                <td>{elm.nom}</td>
                  <td>{elm.genre}</td> 
                   <td>{elm.email}</td>
                     <td>{elm.password}</td>
               

            </tr>
                )
            })}
            </tbody>
           

        </table>
        </div>

    )
}
export default Verifierf