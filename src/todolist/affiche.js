import { useParams } from "react-router-dom"

function Affiche({taches}){

    const {id}=useParams()

    const filter_affiche=taches.filter(elm=>elm.id==id)


    return(
        <div className="card m-5 m-3">
            {filter_affiche.map((elm)=>(
                <div>
                    <p className="my-3">id : {elm.id}</p>
                    <p>id : {elm.text}</p>

                 </div>
            ))}
        </div>
    )
}export default Affiche