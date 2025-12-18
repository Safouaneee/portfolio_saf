import { useState } from "react"

function Inscription(){
    const [identifiant,setID]=useState("")
    const [motpass,setMotpass]=useState("")
    const [date,setDate]=useState("")
    const [ville,setVille]=useState("")
    const [genre,setGenre]=useState("")
    const [loisirs,setLoisirs]=useState([])
    const [img,setimg]=useState(null)

    const [eror_id,seterid]=useState("")
    const [eror_motpass,setermotpass]=useState("")
    const [eror_date,seterdate]=useState("")
    const [eror_ville,seterville]=useState("")
    const [eror_genre,setergenre]=useState("")
    const [eror_loisir,seterloisir]=useState("")
    const [eror_img,seterimg]=useState("")



   function verifier(e){
    e.preventDefault()
    let valid =true
    
    if(identifiant==""){
        seterid("i faut saisir l'identifiant ")
        valid=false
    }
   
    if(motpass==""){
         setermotpass("i faut saisir le mot de passe ")
        valid=false
    }
    
    if(date==""){
         seterdate("i faut saisir la date ")
        valid=false
    }
    
    if(ville==""){
         seterville("i faut saisir la ville ")
        valid=false
    }
    
    if(genre==""){
         setergenre("i faut saisir le genre ")
        valid=false
    }
   
    if(loisirs==""){
         seterloisir("i faut saisir les  loisirs")
        valid=false
    }
   
    if(!img){
         seterimg("i faut saisir l'image ")
        valid=false
    }
    if(valid){
        e.target.submit()
        alert(`l'identifiant : ${identifiant} le mot de passe :  ${motpass} la date :  ${date } la ville :  ${ville} le genre : ${genre} les loisirs :  ${loisirs} l'image : ${img}`)
    }
    else{
        e.preventDefault()
    }


}
function handleloisir(e){
    if(e.target.checked){

        setLoisirs([...loisirs,e.target.value])
    }
    else{
        setLoisirs(loisirs.filter(l =>l !== e.target.value))
    }

}

    return(
        <div className="form">
            <form onSubmit={(e)=>verifier(e)}>
                <h2>Inscription</h2>
                <label>L'identifiant</label>
                <input onChange={(e)=>setID(e.target.value)} type="text"/><span>{eror_id}</span> <br></br>

                <label>Mot de passe</label>
                <input onChange={(e)=>setMotpass(e.target.value)} type="password"/><span>{eror_motpass}</span><br></br>

                <label>date de Naissance</label>
                <input onChange={(e)=>setDate(e.target.value)} type="date"/><span>{eror_date}</span><br></br>

                <label>Ville</label>
                <select onChange={(e)=>setVille(e.target.value)}>
                    <option >la ville</option>
                    <option value={"casablanca"}>casablanca</option>
                    <option value={"rabat"}>rabat</option>
                    <option value={"marakech"}>marakech</option>
                    <option value={"agadir"}>agadir</option>


                </select><span>{eror_ville}</span><br></br>

                <label>Genre</label>
                   <input type="radio" name="genre" onChange={(e)=>setGenre(e.target.value)} value={"homme"}/>Homme
                   <input type="radio" name="genre" onChange={(e)=>setGenre(e.target.value)} value={"femme"}/>femme<span>{eror_genre}</span><br></br>

                
                <label>Loisirs</label>
                  <input type="checkbox" onChange={(e)=>handleloisir(e)} value={"sport"}/>sport
                  <input type="checkbox" onChange={(e)=>handleloisir(e)} value={"lecture"}/>lecture
                  <input type="checkbox" onChange={(e)=>handleloisir(e)} value={"Musique"}/>Musique <span>{eror_loisir}</span><br></br>

                <label>Photo</label>
                 <input onChange={(e)=>setimg(e.target.files[0])} type="file" /><span>{eror_img}</span> <br></br><br></br>

                <input type="submit" value={"s'inscrire"}/>  

            </form>

        </div>
    )

}
export default Inscription