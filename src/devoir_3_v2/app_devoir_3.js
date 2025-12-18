import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import Add_students from "./add_students";
import Details_students from "./details_students";
import axios from "axios";


function App_dev_3(){

const [data_etd,setdata_etd]= useState([
        { id: 1, nom: "Ahmed", prenom: "Ali", filiere: "informatique", moyenne: 14 },
        { id: 2, nom: "Sara", prenom: "Bihi", filiere: "Genie Industriel", moyenne: 12 },
        { id: 3, nom: "Yassine", prenom: "Sami", filiere: "informatique", moyenne: 15 },
])

useEffect(()=>{

        axios.get("http://localhost:4200/etudiants")
        .then((reponse)=>{
                setdata_etd(reponse.data)
        })
        .catch((eror)=>{
                console.log("une ereur mr safouane !!!",eror)
        })
},[])


function supprimer(id) {
    axios.delete(`http://localhost:4200/etudiants/${Number(id)}`)
      .then(() => {
        const filter = data_etd.filter(elm => elm.id !== id);
        setdata_etd(filter);
      })
      .catch((e) => console.log("Erreur suppression:", e));
  }

return(

        <BrowserRouter>

        <Routes>
                <Route path="/" element={ <Home data_etd={data_etd} supprimer={supprimer} ></Home>}/>
                <Route path="/student/:id" element={ <Details_students data_etd={data_etd} />}/>
                <Route path="/add" element={<Add_students data_etd={data_etd} setdata_etd={setdata_etd} ></Add_students>}/>

        </Routes>
        
        
        </BrowserRouter>
        


        


)


}export default App_dev_3