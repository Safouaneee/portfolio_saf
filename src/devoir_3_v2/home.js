
import { Link } from "react-router-dom"
import Main from "./main"
function Home({data_etd,supprimer}){

    const moyenne_generale=data_etd.reduce((acc,val)=>acc+val.moyenne,0)/data_etd.length
    const informatique=data_etd.filter(elm=>elm.filiere=="informatique")
    const genie_industruel=data_etd.filter(elm=>elm.filiere=="Genie Industriel")

    const moy_informatique=informatique.reduce((acc,val)=>acc+val.moyenne,0)/informatique.length
    const moy_industruel=genie_industruel.reduce((acc,val)=>acc+val.moyenne,0)/genie_industruel.length




    return(

        <div>
            <Main></Main>
            <h1 className="h1_st"><i class="ri-group-line"></i>Listes des Etudiants </h1>
            <table className="tb_st">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>prenom</th>
                        <th>filiere</th>
                        <th>Moyenne</th>
                        <th>Actions </th>


                    </tr>
                </thead>
                <tbody>
                    {data_etd.map((elm)=>(
                        <tr key={elm.id}>
                            <td>{elm.nom}</td>
                            <td>{elm.prenom}</td>
                            <td>{elm.filiere}</td>
                            <td ><span style={elm.filiere=="informatique"?{background:"rgba(25, 135, 84,0.3)",padding:"8px",borderRadius:"15px"}:{background:"rgba(220, 53, 69,0.3)",padding:"8px",borderRadius:"15px"}}>{elm.moyenne}/20</span></td>
                            <td>
                                <Link style={{textDecoration:"none"}} to={`/student/${elm.id}`}>

                                   <i id="eye"class="ri-eye-line"></i>

                                </Link>
                                <button id="btn_dl" onClick={()=>supprimer(elm.id)}><i id="delete" class="ri-delete-bin-line"></i></button>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="statestiques">
                <h2><i class="ri-bar-chart-box-ai-fill"></i>Statistiques</h2>
                <h1>
                    <p>Moyeene generale</p>
                    {moyenne_generale.toFixed(2)}/20
                </h1>
                <p>Moyenne  par filiere : </p>
                <h3 id="info">informatique :<span>{moy_informatique.toFixed(2)}/20</span></h3>
                <h3 id="genie">Génie Industriel :<span>{moy_industruel.toFixed(2)}/20</span></h3>

            </div>
        </div>

    )

}export default Home