import { useState } from "react"

import Card_livre from "./card_livre"

function Afficher_livres(){

    const livres=[
         {
    "titre": "RESTful Java Web Services",
    "auteur": "David A. Ureña",
    "edition": "Packt",
    "poster": "http://localhost/livres/livre1.png"
  },
  {
    "titre": "REST API Development with Node.js",
    "auteur": "Fernando Doglio",
    "edition": "Apress",
    "poster": "http://localhost/livres/livre2.png"
  },
  {
    "titre": "RESTful Web Services Cookbook",
    "auteur": "Subbu Allamaraju",
    "edition": "O’REILLY",
    "poster": "http://localhost/livres/livre3.png"
  }

    ]

    return(
        <div className="row">
            {livres.map((livre)=>(
                <Card_livre livre={livre}/>
            ))}
        </div>
    )

}
export default Afficher_livres