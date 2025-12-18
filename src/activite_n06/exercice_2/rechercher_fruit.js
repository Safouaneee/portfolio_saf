import { useState } from "react"

function Rechercher() {


    const [filteredList, setFilteredList] = useState(list)
    const [val, setVal] = useState("")

   


    function afficher_type(e) {
        setVal(e.target.value)


    }
    function afficher() {
        const new_tab = list.filter(elm => elm.type.includes(val))
        setFilteredList(new_tab)
    }


    return (
        <div style={{ backgroundColor: ' rgb(147, 197, 114)', padding: '15px', width: '600px', border: '1px solid gray', height: 'fit-Content', margin: '20px', borderRadius: '5px' }}>
            <h1 style={{ margin: '20px 0', fontSize: '28px', fontWeight: 'bolder' }}>Composant App</h1>
            <div style={{ margin: 'auto', padding: '10px', width: '300px', border: '1px solid  rgba(0,0,0,0.3) ', backgroundColor: ' rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)', borderRadius: '5px' }}>
                <h2 style={{ fontSize: '22px', margin: '20px 0', fontWeight: "bold" }}>  composant ChercherBar</h2>
                <label>Entrer le mot cle de recherche</label><br></br>

                <input onChange={(e) => afficher_type(e)} type="text" /><br></br>


                <button style={{ border: 'none', padding: '2px', margin: '3px 0' }} onClick={afficher} >chercher</button>


            </div>
            <p>le type : <span>{val === "fruit" || val === "legume" ? val : ""}</span></p>
            <div style={{ margin: 'auto', padding: '10px', width: '300px', border: '1px solid  rgba(0,0,0,0.3) ', backgroundColor: ' rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)', borderRadius: '5px' }}>
                <h1 style={{ fontSize: '25px', margin: '25px 0', fontWeight: "bold" }}>Composant ResultatList</h1>
                <div style={{ margin: 'auto', padding: '10px', width: '200px', border: '1px solid white', color: 'white', backgroundColor: 'rgba(0,0,0,0.9)' }}>


                    <ul>
                        {filteredList.map(elm =>
                            <li>{elm.nom}</li>
                        )}

                    </ul>


                </div>
            </div>
        </div>
    )

}
export default Rechercher