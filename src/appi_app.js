import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  /*
  {id , text}


  */

  const [tasks, setTasks]= useState([])

  const [text , setText]= useState("")


  useEffect(
    ()=>{
      axios.get("http://localhost:4000/tasks")
        .then(
          (response)=>{

            setTasks(response.data)

          }
        )
    } , [tasks]
  )

  function addTask(){
    if(!text) return 

    const newTask = {
      id:(tasks.length+1).toString(),
      text: text
    }

    axios.post("http://localhost:4000/tasks", newTask)
      .then(
        ()=>{
          setTasks([...tasks, newTask])
          setText("")
          alert("ajouter!")
        }
      )
      .catch(
        ()=>{
          alert("non ajouter!")
        }
      )

    
    
  }

  function deleteTask(id){

    axios.delete(`http://localhost:4000/tasks/${id}`)
      .then(
        ()=>{
          const newTasks=tasks.filter(task=> task.id != id)

          setTasks(newTasks)
          
          alert("deleted")

        }
      )
      .catch(
        ()=>{

        }
      )
    
  }

  
  return ( 
    <div className="container card p-3 m-3">
      <div className="mt-3 d-flex flex-row">
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="form-control"/>
        <button onClick={addTask} className="btn btn-primary">
          Ajouter
        </button>
      </div>

      <div className="mt-3">
        {
          tasks.length==0?
          <p className="text-muted text-center">aucune tache pour le moment</p>
          :
          tasks.map(
            (task, index)=>(
              <div className="card p-3 mt-3 bg-secondary text-light">
                {
                  task.text
                }

                <button onClick={()=>deleteTask(task.id)} className="btn btn-danger">
                  supprimer
                </button>

              </div>
            )
          )
        }

      </div>



    </div>

   );
}
 
export default App;