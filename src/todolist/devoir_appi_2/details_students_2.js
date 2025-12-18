import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

 function StudentDetails_2() {
  const { CEF } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`https://students203204.vercel.app/api/students/${CEF}`)
      .then((res) => setStudent(res.data))
      .catch(() => setStudent(null));
  }, [CEF]);

  if (!student) return <h3>Chargement...</h3>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Détails de l'étudiant</h2>

      <p><b>CEF :</b> {student.CEF}</p>
      <p><b>Nom :</b> {student.Nom}</p>
      <p><b>Prénom :</b> {student.Prénom}</p>
      <p><b>Group :</b> {student.Group}</p>

      <br />

      <Link to="/" style={{ textDecoration: "none" }}>
        <button>Retour</button>
      </Link>
    </div>
  );
}
export default StudentDetails_2