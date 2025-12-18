import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Main from "./main"


function Details_students({data_etd}){
    const {id}=useParams()
    const filter_details=data_etd.filter(elm=>elm.id==id)

    return(
        <div className="retour_etd">
            <Main></Main>
            <Link to="/">
                 <button id="rt_etd"className="retour"><i class="ri-arrow-left-line"></i>retour to the home </button>
                  
            </Link>
            {filter_details.map((elm)=>(
                <div className="carte_etd">
                    <h1><i class="ri-graduation-cap-line"></i>{elm.prenom} {elm.nom}<br></br><span>{elm.filiere}</span></h1>
                    <div className="carte_etd2">

                            <div  className="nm_pr">
                                <h2><p>Nom</p>{elm.nom}</h2>
                                <h2><p>Prenom</p>{elm.prenom}</h2>

                            </div>

                            <div className="fil_moy">

                                <h2><p>Filiere</p>{elm.filiere}</h2>
                                <h2><p>Moyenne Generale</p>{elm.moyenne}</h2>
                            </div>
                            <h2 id="res">Resultal :<span > {elm.moyenne>10?"valide":"non valide"}</span></h2>
                    </div>

                </div>
            ))}
            
        </div>
    )

}export default Details_students