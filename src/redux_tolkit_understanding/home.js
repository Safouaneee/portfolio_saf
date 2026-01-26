import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setMoyenne,granNote, setGrandNote } from "./sliceRedux"
import { Link } from "react-router-dom"

function Home(){
    const [liste,setListe]=useState([
       {
         id:1,
         nom:"safouane",
         note:16
        
        },
         {
         id:2,
         nom:"radouane",
         note:14
        
        },
         {
         id:3,
         nom:"marouane",
         note:9
        
        },
         {
         id:4,
         nom:"soufiane",
         note:11
        
        },

    ])
    const dispatcher =useDispatch()
    const moyenne = liste.filter(elm=>elm.note).reduce((acc,val)=>acc+val.note,0)/liste.length
    const granNote = Math.max(...liste.map(elm=>elm.note))

    useEffect(()=>{
        dispatcher(setMoyenne(moyenne))
        dispatcher(setGrandNote(granNote))

    },[liste])

    return(
        <div>
            <Link to={"/dash"}><button>dashbord</button></Link>
            <table className="table table-striped w-75 m-5">
                <tr>
                    <th>nom</th>
                    <th>Note</th>

                </tr>
                {liste.map((elm)=>(
                    <tr>
                        <td>{elm.nom}</td>
                        <td>{elm.note}</td>

                    </tr>
                ))}
            </table>
        </div>
    )

}export default Home