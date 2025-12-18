import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <nav className="nav_dtudent" >
      <h2 ><i class="ri-graduation-cap-line"></i>StudentApp</h2>
      <div className="btn_student">
        <Link  to="/"><button className="bt1">Home</button></Link>
        <Link  to="/ajouter"><button className="bt2">+ Ajouter</button></Link>
      </div>
    </nav>
  );
}



export default Main;
