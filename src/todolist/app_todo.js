import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home_todo from "./home_todo"
import Affiche from "./affiche"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function App_todolist(){

     const [taches,settaches]=useState([])
    const [fil_taches,setfiltaches]=useState([])



    useEffect(()=>{
        axios.get("http://localhost:4040/taches")
        .then((reponse)=>{
            settaches(reponse.data)
            setfiltaches(reponse.data)
        })
        .catch((eror)=>{
            console.log("ereur : ",eror)
        })

    },[])


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home_todo taches={taches} settaches={settaches} fil_taches={fil_taches}  setfiltaches={setfiltaches} />}></Route>
            <Route path="todo/:id" element={<Affiche taches={taches}/>}></Route>
        </Routes>
        
        </BrowserRouter>
    )

}export default App_todolist