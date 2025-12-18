import Main from "./main"
import axios from "axios"

function Liste_axios({fil_data,data_etd,setfildata,supprimer}){

    function handlerecherche(e){
        const recherche = data_etd.filter(elm=>elm.nom.includes(e.target.value))
        setfildata(recherche)


    }

    return(
        <div>
            <Main/>

        <input type="text " className="form-control w-25 m-4 p-2" placeholder="Chercher etudiant" onChange={handlerecherche}/>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>loisirs</th>
                    <th>moyenne</th>
                    <th>actions</th>


                </tr>
            </thead>

            <tbody>
                {fil_data.map((elm)=>(

                <tr>
                    <td>{elm.id}</td>
                    <td>{elm.nom}</td>
                    <td>{elm.loisirs}</td>
                    <td>{elm.moyenne}</td>
                    <td>
                        
                        <button onClick={()=>supprimer(elm.id)} className="btn btn-danger">delete</button>

                    </td>


                </tr>
                ))}
            </tbody>
        </table>

        </div>

    )

}export default Liste_axios