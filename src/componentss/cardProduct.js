import { Link } from "react-router-dom";

function CardPr({ product }) {
  return (
    <div className="col-3 mb-4">
      <div className="card shadow-sm">
        
        <Link to={`/product/${product.id}`}>
          <img
            className="bd-placeholder-img card-img-top"
            src={`/pictures/${product.thumbnail}`}
            alt={product.title}
          />
        </Link>

        <div className="card-body text-center">
          <p className="card-title fw-bold">{product.title}</p>
          <p className="card-text text-primary">{product.price}</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPr;
