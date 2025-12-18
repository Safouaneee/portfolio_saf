const Produit = function (props) {

    return <div key={props.index} className="col-3">
        <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top"
                src={`/pictures/${props.prd.thumbnail}`} alt="" />
            <div className="card-body">
                <p className="card-title">{props.prd.title}</p>
                <p className="card-text">{props.prd.price}</p>
                <div className="d-flex justify-content-between align 
        items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Produit
