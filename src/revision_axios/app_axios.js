import { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Liste_axios from "./liste_axios"
import Form_axios from "./form_axios"

function App_axios(){

    const[data_etd,setdata]=useState([])
    const[fil_data,setfildata]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:4400/data")
        .then((rep)=>{
            setdata(rep.data)
            setfildata(rep.data)
        })
        .catch((er)=>{
            console.log("une ereur !!",er)
        })
    },[])

    function supprimer(id){
        axios.delete(`http://localhost:4400/data/${id}`)
        .then(()=>{
             const filter_delete=data_etd.filter(elm=>elm.id!==id)
             setdata(filter_delete)
             alert("etudiant supprimer avec success")
        })
        .catch(()=>{
            alert("une ereur ")
        })
       
    }

    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Liste_axios data_etd={data_etd} fil_data={fil_data} setfildata={setfildata} supprimer={supprimer}/>}></Route>
                <Route path="/ajouter" element={<Form_axios data_etd={data_etd} />}></Route>

            </Routes>
        
        
        </BrowserRouter>
    )

    

}export default App_axios