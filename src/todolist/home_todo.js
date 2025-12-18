import { useEffect, useState } from "react"
import axios from "axios"
import Card_todo from "./card_todolist"

function Home_todo({taches,settaches,fil_taches,setfiltaches}){

   

    const user_ids=taches.map((elm)=>elm.user_id)
    const filter_ids=user_ids.filter((elm,index)=>user_ids.indexOf(elm)==index)

    function handleselect(e){
        if(e.target.value=="liste"){
            setfiltaches(taches)
        }
        else{

            const filter_todo=taches.filter(elm=>elm.user_id==e.target.value)
            setfiltaches(filter_todo)
        }
    }


    return(
        <div>
            <h1 className="m-5 p-2">Listes des todos</h1>
            <label className="form-label mt-2 mx-3 w-50">Selectionner un utilisateur</label>
            <select onChange={handleselect} className="form-select w-50 mx-3">
                <option value={"liste"} >les users</option>
                {filter_ids.map((elm)=>(
                    <div>
                        <option value={elm}>{elm}</option>
                    </div>
                ))}

            </select>
            <div className="my-3 mx-3">
                <Card_todo taches={taches} fil_taches={fil_taches}/>

            </div>
        </div>
    )



}export default Home_todo