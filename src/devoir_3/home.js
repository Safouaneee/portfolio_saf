import { Link } from "react-router-dom";
import Navbar from "./main";

function Home({ etudiants ,setEtudiants}) {

    function supprimmer(id){
        const filter_etd=etudiants.filter((elm)=>elm.id!==id)
        setEtudiants(filter_etd)
    
    
    }
  const moyenne_gn =
    etudiants.reduce((acc, e) => acc + e.moyenne, 0) /
    etudiants.length;

  const infoList = etudiants.filter(e => e.filiere === "informatique");
  const genieList = etudiants.filter(e => e.filiere === "Genie Industriel");

  const moyenne_info =
    infoList.length > 0
      ? infoList.reduce((acc, e) => acc + e.moyenne, 0) / infoList.length
      : 0;

  const moyenne_genie =
    genieList.length > 0
      ? genieList.reduce((acc, e) => acc + e.moyenne, 0) / genieList.length
      : 0;

  return (
    <div className="container mt-4">
    <Navbar></Navbar>

      <h1>Liste des Étudiants : {etudiants.length}</h1>

      <Link to="/add" className="btn btn-primary my-3">Ajouter un étudiant</Link>

      <table className="table table-striped">
        <thead>
          <tr className="bg-primary text-white">
            <th>Nom</th>
            <th>Prénom</th>
            <th>Filière</th>
            <th>Moyenne</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {etudiants.map((elm) => (
            <tr key={elm.id}>
              <td>{elm.nom}</td>
              <td>{elm.prenom}</td>
              <td>{elm.filiere}</td>
              <td>{elm.moyenne}</td>
              <td>
                <Link to={`/student/${elm.id}`} className="btn btn-info btn-sm me-2">
                  Voir
                </Link>
                <button className="btn btn-danger" onClick={()=>supprimmer(elm.id)}>supprimmer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card my-3 p-3">
        <h2>Statistiques</h2>

        <h4>Moyenne générale : {moyenne_gn.toFixed(2)}</h4>
        <h4>Moyenne Informatique : {moyenne_info.toFixed(2)}</h4>
        <h4>Moyenne Génie Industriel : {moyenne_genie.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Home;
