import { useState } from "react"
function Change() {
    function afficher(e) {
        setNom(e.target.value)

    }
    const [nom, setNom] = useState("cher utilisateur")

    return (
        <div className="mt-3 mx-3 p-2 border-1 rounded">
            <h1>Saisie de Nom</h1>
            <input onChange={(e) => afficher(e)} id="inp" type="text" placeholder="Entrez votre nom ..." className="form-control my-2"></input>
            <p>Bonjour <span>{nom}</span> </p>

        </div>
    )
}
export default Change