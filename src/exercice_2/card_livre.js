import { useState } from "react"

function Card_livre({livre}){
    const [nbr,setnbr] =useState(0)
    const [count,setcount]=useState(0)

    function handlelike(){
      const newNbr = nbr + 1;
      setnbr(newNbr);
      setcount(newNbr);
    }
    return(
        <div className="col-3 mb-4">
      <div className="card shadow-sm">
        
          <img
            className="bd-placeholder-img card-img-top"
            src={`${livre.poster}`}
            
          />

        <div className="card-body text-center">
          <p className="card-title fw-bold">{livre.titre}</p>
          <p className="card-text text-primary">{livre.auteur}</p>
          <p className="card-text text-primary">{livre.edition}</p>

          <button onClick={handlelike} type="button"className="btn btn-sm btn-outline-secondary">Like  <span>{count}</span></button>
        </div>
      </div>
    </div>
    )

}
export default Card_livre