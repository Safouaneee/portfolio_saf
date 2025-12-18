import axios from "axios"
import { useEffect, useState } from "react"

function  App_todolist(){

    const link = "https://jsonplaceholder.typicode.com/todos"
    const [taches,settaches]=useState([])
    const [fil_taches,setfil_taches]=useState([])

    const [style_Checked,setstyle]=useState([])

    const allUserIds = taches.map(elm => elm.userId);
    const uniqueUserIds = allUserIds.filter((userId, index) => allUserIds.indexOf(userId)== index);


    useEffect(function(){
        axios.get(link)
        .then(reponse=>{
            settaches(reponse.data)
            setfil_taches(reponse.data)
        })   
       .catch(error=>{
        console.error("erreur :",error)
       })
    },[])

    function handlefilter(e){
        const search_taches=taches.filter((elm)=>elm.userId ==e.target.value)
        setfil_taches(search_taches)
    }

    function handleselect(e){
        const id = Number(e.target.value)
            if (style_Checked.includes(id)) {
            setstyle(style_Checked.filter(el => el !== id)) 
            } else {
            setstyle([...style_Checked, id]) 
            }
    }

    return(
        <div className="ct">
            <div className="todolist">
                <h1>Listes des Todos </h1>
                <p>fhg</p>
                <div className="lignee"></div>

                <label><i class="ri-user-fill"></i>Selectionner un utilisateur</label>
                <select onChange={handlefilter}>
                {uniqueUserIds.map((elm=>(
                    <div>
                    <option value={elm}>{elm}</option>

                    </div>

                )))}
                </select>

                <div className="ligne2"></div>
                {fil_taches.map((elm=>(
                    

                <div style={{backgroundColor:style_Checked.includes(elm.id)?"rgba(34,187,51,0.2)":""}} className="todo">

                    <input  checked={style_Checked.includes(elm.id)} value={elm.id} onChange={handleselect} type="checkbox"></input><span>Todo {elm.id}</span>
                    <p style={{textDecoration:style_Checked.includes(elm.id)?"line-through":"none"}}>{elm.title}</p>
                    <h6>user {elm.userId}</h6>

                </div>
                )))}


            </div>

        </div>
    )
}
export default App_todolist