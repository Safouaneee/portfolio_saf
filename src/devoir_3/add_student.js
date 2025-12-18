import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./main";

function AddStudent({ addStudent }) {
  const nav = useNavigate();

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    filiere: "",
    moyenne: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent({
      ...form,
      moyenne: Number(form.moyenne)
    });

    nav("/");
  };

  return (
    <div className="container mt-4">
    <Navbar></Navbar>

      <h2>Ajouter un étudiant</h2>

      <form onSubmit={handleSubmit}>
        <input name="nom" className="form-control mb-2" placeholder="Nom" onChange={handleChange} />
        <input name="prenom" className="form-control mb-2" placeholder="Prénom" onChange={handleChange} />
        <input name="filiere" className="form-control mb-2" placeholder="Filière" onChange={handleChange} />
        <input name="moyenne" type="number" className="form-control mb-2" placeholder="Moyenne" onChange={handleChange} />

        <button className="btn btn-success">Ajouter</button>
      </form>
    </div>
  );
}

export default AddStudent;
