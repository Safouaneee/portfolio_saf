
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav p-3" >
      <h2 >StudentApp</h2>
      <div >
        <Link  to="/"><button className="btn  btn-warning mx-2">Home</button></Link>
        <Link  to="/add"><button className="btn btn-primary">Add sutudent</button></Link>
      </div>
    </nav>
  );
}



export default Navbar;
