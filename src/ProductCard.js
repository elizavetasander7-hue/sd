import { Link } from 'react-router-dom';

function ProductCard({ 
  id, 
  name, 
  price, 
  image,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity
}) {
  
  const increase = () => {
    const newQty = quantityInCart + 1;
    onUpdateQuantity(id, newQty);
  };

  const decrease = () => {
    const newQty = quantityInCart - 1;
    if (newQty >= 0) {
      onUpdateQuantity(id, newQty);
    }
  };

  const handleImageError = (e) => {
    e.target.src = '';
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={image} 
            alt={name} 
            className="product-image"
            onError={handleImageError}
          />
        </div>
        <h3>{name}</h3>
        <p className="price">{price} ₽</p>
      </Link>
      
      <div className="product-actions">
        {quantityInCart === 0 ? (
          <button className="add-button" onClick={() => onAddToCart(id, 1)}>
            В корзину
          </button>
        ) : (
          <>
            <div className="quantity-selector">
              <button onClick={decrease} className="qty-btn">-</button>
              <span className="qty-value">{quantityInCart}</span>
              <button onClick={increase} className="qty-btn">+</button>
            </div>
            <div className="in-cart-badge">✓ В корзине</div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;