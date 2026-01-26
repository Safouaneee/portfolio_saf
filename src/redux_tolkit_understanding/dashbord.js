import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Dashbord (){
    const moyenne =useSelector(state=>state.notes.moyenne)
    const grand =useSelector(state=>state.notes.grandNote)


    return (
        <div className="container">
            <Link to={"/"}><button>home</button></Link>
            <p>la moyenne est : {moyenne}</p>
            <p>la moyenne est : {grand}</p>


        </div>
    )

}export default  Dashbord 