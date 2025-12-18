import { useParams } from "react-router-dom";
import Navbar from "./main";

function StudentDetail({ etudiants }) {
  const { id } = useParams();

  const etu = etudiants.find((e) => e.id == id);

  if (!etu) return <h2>Étudiant introuvable</h2>;

  return (
    <div className="container mt-4">
        <Navbar></Navbar>
      <h2>Détails de l’étudiant</h2>

      <div className="card p-3">
        <h3>{etu.nom} {etu.prenom}</h3>
        <p>Filière : {etu.filiere}</p>
        <p>Moyenne : {etu.moyenne}</p>
      </div>
    </div>
  );
}

export default StudentDetail;
