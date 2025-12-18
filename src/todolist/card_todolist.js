import { useState } from "react"
import { Link } from "react-router-dom"

function Card_todo({taches,fil_taches}){
    const [checkedd,setchecked]=useState([])
    // kat ajouter l id dial dik input checkbox lwahd liste
    //  okat9arn lelement li fliste m3a element  nafso
    // ila kano b7al b7al kat7yd dak l id mn la liste ila  makanoch b7al b7al katzido l la list 
    // lhadaf mn hadchi kamal howa nb9aw n9arno dak element dial dak array m3a elm.id li kayn f input ila kant la condition true rah kaytra cheked lhadak element 
    // y3ni 7ta t79a9 la condition 3ad ndiro true ila drna rir true kolchi raytra lih checked

    function handlechecked(e){
        const id=Number(e.target.value)
        if(checkedd.includes(id)){
            setchecked(checkedd.filter(elm=>elm!==id))
        }
        else{
            setchecked([...checkedd,id])
        }

    }



    return(

        <div>
            {fil_taches.map((elm)=>(
               
                
                    <div className="card p-3 my-2 w-50">
                        <input checked={checkedd.includes(elm.id)} value={elm.id} onChange={handlechecked} type="checkbox" className=""></input><span>todo {elm.id}</span>
                         <Link to={`todo/${elm.id}`}>
                        <p style={{textDecoration:checkedd.includes(elm.id)?"line-through":"none"}} className="my-2 mx-2">{elm.text}</p>
                        </Link>

                        <h6 className="my-2">{elm.user_id}</h6>

                    </div>
                

            ))}

        </div>

    )

}export default Card_todo