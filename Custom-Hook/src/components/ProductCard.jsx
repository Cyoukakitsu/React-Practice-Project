import { FashoppingCart } from "react-icons/fa";

function ProductCard({ prodcut, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{prodcut.name}</h3>
      <p className="price">${prodcut.price}</p>
      <button onClick={() => onAddToCart(prodcut)}>
        <FashoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
