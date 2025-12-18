import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import AddStudent from "./add_student";
import StudentDetail from "./details_students";

const etudiantsInitialData = [
  { id: 1, nom: "Ahmed", prenom: "Ali", filiere: "informatique", moyenne: 14 },
  { id: 2, nom: "Sara", prenom: "Bihi", filiere: "Genie Industriel", moyenne: 12 },
  { id: 3, nom: "Yassine", prenom: "Sami", filiere: "informatique", moyenne: 15 },
];

function App_students() {
  const [etudiants, setEtudiants] = useState(etudiantsInitialData);

  const addStudent = (data) => {
    setEtudiants([...etudiants, { ...data, id: etudiants.length+1 }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home etudiants={etudiants} setEtudiants={setEtudiants} />}
        />

        <Route
          path="/add"
          element={<AddStudent addStudent={addStudent} />}
        />

        <Route
          path="/student/:id"
          element={<StudentDetail etudiants={etudiants} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App_students;
