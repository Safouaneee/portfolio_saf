/*
import Card from "./activite_n06/exercice_1";
const myVoiture = {
  matricule: "HJ6887h",
  marque: "dacia logan",
  nombre_chevaux: 8,

}


function App() {
  return (
    <div>
      <Card myVoiture={myVoiture} />
    </div>
  );
}

import Increment from "./activite_N_7/exercice_1";
import Change from "./activite_N_7/exercice_2";

i




import Rechercher from "./activite_n06/exercice_2/rechercher_fruit";
import Inscription from "./exercice_verifier_form/inscription";
import Inscription2 from "./exercice_verifier_form/inscription_2";


function App() {
  return (
    <div className="content">
    <Inscription2/>
    
    
    
    
    </div>
  );
}


import Rechercher2 from "./activite_n06/exercice_2/rechercherfruit2";
import Result from "./activite_n06/exercice_2/result";
import Afficher_type from "./activite_n06/exercice_2/afficher_type";

function App() {

  
    const list = [
              { nom: "banane", type: "fruit" },
              { nom: "pomme", type: "fruit" },
              { nom: "orange", type: "fruit" },
              { nom: "kiwi", type: "fruit" },
              { nom: "tomate", type: "legume" },
              { nom: "pomme de terre", type: "legume" },
              { nom: "carotte", type: "legume" },
              { nom: "navet ", type: "legume" },
              { nom: "poivron", type: "legume" }
  
          ]
      

      
      const [typecontent,settype]=useState("")
      const filterlist = typecontent?list.filter(elm => elm.type.includes(typecontent)):[]

  return (
    <div className="content">

    <Rechercher2 settype={settype}/>
    <Afficher_type typecontent={typecontent}/>
    <Result filterlist={filterlist} />




    </div>
  );
}
export default App;



import Navbar from "./activite_n06/exercice_2/navbar";
import Slide from "./activite_n06/exercice_2/slidebar";
import Home from "./activite_n06/exercice_2/home";
import Footer from "./activite_n06/exercice_2/footer";
function App() {
  return (
    <div className="container">

    
    

      <Navbar />
      <div className="content">
        <Slide />

        <div className="box1">


          <Home />
        </div>


    
      </div>
    
    </div>
  );
}



import { useState } from "react";
import Nav from "./revision_3/Nav";
import Form from "./revision_3/form";
import List from "./revision_3/list";

function App() {
  const [page, setPage] = useState('form'); 
  const [table,settable]=useState([])
  
  return (
    <div>
    <Nav setPage={setPage} />
    {page === 'form' && <Form table={table} settable={settable} />}
    {page === 'liste' && <List table={table} />}
    </div>
  );
}

export default App;
*/
import { useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detailsProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



