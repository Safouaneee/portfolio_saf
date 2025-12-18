import { useState } from "react"

function Inscription2(){

    const [form,setForm]=useState({
        id:"",
        motpasse:"",
        date:"",
        ville:"",
        genre:"",
        loisirs:[],
        img:null,
    })

    const [err, setErr] = useState({})

    function handlesubmit(e){
        const {name,value,checked,type,files}=e.target

        if(type=="checkbox"){
            if(checked){

                setForm({
                    ...form,loisirs:[...form.loisirs,value]
                })
            }
            else {
                
                setForm({
                    ...form,loisirs:form.loisirs.filter(l => l !== value)
                })
            }
        }
        else if(type=="file"){
                setForm({
                    ...form,img:files[0]
                })

        }
        else{
            setForm({...form,[name]:value})
        }
    }
   function verifier(e) {
            e.preventDefault()
            const newErr = {}
            let valid=true
            if (!form.id.trim()) {
                newErr.id = " Veuillez saisir l'identifiant."
                console.log("thus : ",newErr)
                valid=false
            }
                
            if (!form.motpasse.trim()){
                newErr.pass = " Veuillez saisir le mot de passe."
                valid=false
          } 
            if (!form.date.trim()) {
                newErr.date = " Veuillez saisir la date de naissance."
                valid=false
            }
            if (!form.ville.trim()){
                newErr.ville = " Veuillez choisir une ville."
                valid=false

            } 
            if (!form.genre.trim()){
                newErr.genre = " Veuillez sélectionner le genre."
                valid=false

            }
            if (form.loisirs.length === 0){
                    newErr.loisirs = " Veuillez choisir au moins un loisir."
                    valid=false
            } 
            if (!form.img){
                  newErr.img = " Veuillez ajouter une photo."
                  valid=false

            }

            setErr(newErr)

            if(valid){
                
                alert(`${form.id}\n ${form.motpasse} \n ${form.date}\n ${form.ville}\n ${form.genre}\n ${form.loisirs}\n ${form.img} `)

            }
            else{
                e.preventDefault()
            }
   }

     return(
        <div className="form">
            <form onSubmit={(e)=>verifier(e)}>
                <h2>Inscription</h2>
                <label>L'identifiant</label>
                <input onChange={handlesubmit}name="id" value={form.id} type="text"/><span>{err.id}</span> <br></br>

                <label>Mot de passe</label>
                <input onChange={handlesubmit} name="motpasse" value={form.motpasse} type="password"/><span>{err.pass}</span><br></br>

                <label>date de Naissance</label>
                <input onChange={handlesubmit} name="date" value={form.date} type="date"/><span>{err.date}</span><br></br>

                <label>Ville</label>
                <select onChange={handlesubmit} name="ville" value={form.ville}>
                    <option >la ville</option>
                    <option value={"casablanca"}>casablanca</option>
                    <option value={"rabat"}>rabat</option>
                    <option value={"marakech"}>marakech</option>
                    <option value={"agadir"}>agadir</option>


                </select><span>{err.ville}</span><br></br>

                <label>Genre</label>
                   <input type="radio" name="genre" onChange={handlesubmit} value={"homme"}/>Homme
                   <input type="radio" name="genre" onChange={handlesubmit} value={"femme"}/>femme<span>{err.genre}</span><br></br>

                
                <label>Loisirs</label>
                  <input type="checkbox" name="loisirs" onChange={handlesubmit} value={"sport"}/>sport
                  <input type="checkbox" name="loisirs" onChange={handlesubmit} value={"lecture"}/>lecture
                  <input type="checkbox" name="loisirs" onChange={handlesubmit} value={"Musique"}/>Musique <span>{err.loisirs}</span><br></br>

                <label>Photo</label>
                 <input onChange={handlesubmit}  type="file" /><span>{err.img}</span> <br></br><br></br>

                <input type="submit" value={"s'inscrire"}/> 

            </form>

        </div>
    )

}



export default Inscription2