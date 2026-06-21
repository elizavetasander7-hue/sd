import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import products from './products';

function ProductPage({ cart, addToCart, updateQuantity }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться в магазин</Link>
      </div>
    );
  }

  const cartItem = cart.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleUpdateQuantity = (newQty) => {
    updateQuantity(product.id, newQty);
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
        <Link to="/" className="back-link">← Назад в магазин</Link>
        <div className="product-page-grid">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-page-image" />
          </div>
          <div className="product-info-wrapper">
            <h1 className="product-page-name">{product.name}</h1>
            <div className="product-page-brand">{product.brand?.toUpperCase()}</div>
            <div className="product-page-price">{product.price.toLocaleString()} ₽</div>
            <div className="product-page-availability">
              {quantityInCart > 0 ? (
                <span className="in-stock">В корзине ({quantityInCart} шт.)</span>
              ) : (
                <span className="in-stock">В наличии</span>
              )}
            </div>
            <div className="product-page-actions">
              {quantityInCart === 0 ? (
                <>
                  <div className="quantity-selector">
                    <button onClick={decrease} className="qty-btn">-</button>
                    <span className="qty-value">{quantity}</span>
                    <button onClick={increase} className="qty-btn">+</button>
                  </div>
                  <button className="add-button" onClick={handleAddToCart}>
                    В корзину
                  </button>
                </>
              ) : (
                <div className="quantity-selector">
                  <button onClick={() => handleUpdateQuantity(quantityInCart - 1)} className="qty-btn">-</button>
                  <span className="qty-value">{quantityInCart}</span>
                  <button onClick={() => handleUpdateQuantity(quantityInCart + 1)} className="qty-btn">+</button>
                </div>
              )}
            </div>
            {product.details && (
              <div className="product-details">
                <h3>Характеристики</h3>
                <table className="details-table">
                  <tbody>
                    {Object.entries(product.details).map(([key, value]) => (
                      <tr key={key}>
                        <td className="detail-key">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td className="detail-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;