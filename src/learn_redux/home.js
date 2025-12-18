import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { setname } from "./action"
import { quantite } from "./action"
function Home_red(){

    
    const dispatcher =useDispatch()
    const name_input =useSelector(state=>state.nomProduit)
    const qt_input =useSelector(state=>state.Quantite)
    const [list, setList] = useState([]);

    function handleajouter(){
       setList([...list,{id:list.length+1,nom:name_input,qt:qt_input}])
       dispatcher(setname(""))
       dispatcher(quantite(""))

       
    }
    function supprimmer(id){
        setList(list.filter(elm=>elm.id!==id))

    }
    

    return(
        <div>
            <h1 className="my-3 mx-2">Gestionnaire de Prosuuits</h1>
            <input type="text" value={name_input} className="form-control my-3 mx-2 " onChange={(e)=>dispatcher(setname(e.target.value))} placeholder="non du Produit" />
            <input type="Number" value={qt_input} className="form-control my-3 mx-2 " onChange={(e)=>dispatcher(quantite(e.target.value))} placeholder="Quantite"/>
            <button onClick={handleajouter} className="btn btn-primary my-3 mx-2">Ajouter</button>
             <div className="mt-3 p-3">
                {list.map((elm)=>(
                    <div>
                        <h2>{elm.nom}<span className="mx-2">QT : {elm.qt}</span></h2>
                        <button className="btn btn-success">modifier</button>
                        <button onClick={()=>supprimmer(elm.id)} className="btn btn-danger mx-3">supprimmer</button>

                    </div>
                ))}

             </div>
        </div>
    )

}export default Home_red