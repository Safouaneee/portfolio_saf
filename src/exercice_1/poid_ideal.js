import { useState } from "react"

function Poid(){
    const [taille,settaille]=useState("")
    const [image,setimage]=useState("")
    const [genre,setgenre]=useState("")
    const [poids,setPoids]=useState("")


    function handleimage(e){
        setgenre(e.target.value)
        if(e.target.value=="male"){
            setimage("/images_male_famalle/male.png")
        }
        else{
            setimage("/images_male_famalle/female.png")

        }

    }
    
    function handleCalcul(){

        if(genre=="male" ){

                if(taille){
                    setPoids((taille-100)-(taille-150)/4)
                    }
                else{
                    setPoids("enter la taille")
                }
                if(isNaN(taille)){
                    setPoids("Le poid doit etre integer")

        }

        }
        else if(!genre ){
             setPoids("selectioner le genre s'il vous plait")
        }
       
        else{
                if(taille){
                    setPoids("le poids ideal est :"+(taille-100)-(taille-150)/2.5 +"kg")

                }
                if(isNaN(taille)){
                        setPoids("Le poid doit etre integer")

        }

        }
    }




    return(
        <div className="container mt-5"> 

              <label className="form-label">Taille en CM :</label>
              <input type="text" className="form-control w-25" onChange={(e)=>settaille(e.target.value)}/>

               <label className="form-label">Genre:</label>
                <select onChange={handleimage}>
                    
                    <option>choose genre</option>
                    <option value={"male"}>male</option>
                    <option value={"female"}>female</option>

                </select> <img height={"40"} src={`${image}`} /><br></br>

              <label className="form-label">Poid ideal :</label>
              <input type="text" className="form-control mb-3 w-25" value={poids}/>

              <button onClick={handleCalcul} className="btn btn-primary">Calculer</button>
        </div>
    )

}
export default Poid