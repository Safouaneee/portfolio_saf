
function Card(props) {
    return (
        <div className="box">
            <h1>Information voiture</h1>
            <p>Voiture matricule : <span>{props.myVoiture.matricule}</span></p>
            <p>Voiture matricule : {props.myVoiture.marque}</p>
            <p>Voiture matricule : {props.myVoiture.nombre_chevaux}</p>

        </div>
    )
}
export default Card