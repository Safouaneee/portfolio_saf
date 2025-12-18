import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";

function DetailProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Produit introuvable</p>;

  return (
    <div className="text-center mt-5">
      <h2>{product.title}</h2>
      <img
        src={`/pictures/${product.thumbnail}`}
        alt={product.title}
        style={{ width: "300px" }}
      />
      <p className="fw-bold mt-3">{product.price}</p>
      <Link to="/" className="btn btn-link">
        Aller vers la page d'accueil
      </Link>
    </div>
  );
}

export default DetailProduct;
