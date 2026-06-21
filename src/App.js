import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCard from './ProductCard';
import CartIcon from './CartIcon';
import CategoryFilter from './CategoryFilter';
import ProductPage from './ProductPage';
import products from './products';
import './App.css';
import useLocalStorage from './useLocalStorage'; 

function App() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useLocalStorage('activeCategory', 'all');
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');
  const [sortOption, setSortOption] = useLocalStorage('sortOption', '');

  const getSortedProducts = (productsList) => {
    if (!sortOption) return productsList;
    if (sortOption === 'По возрастанию цены') {
      return [...productsList].sort((a, b) => a.price - b.price);
    } else {
      return [...productsList].sort((a, b) => b.price - a.price);
    }
  };

  const categories = [
    { key: 'all', label: 'Все товары' },
    { key: 'notebooks', label: 'Ноутбуки' },
    { key: 'smartphones', label: 'Смартфоны' },
    { key: 'smartwatches', label: 'Смарт-часы' },
    { key: 'headphones', label: 'Наушники' },
    { key: 'refrigerators', label: 'Холодильники' },
    { key: 'tv', label: 'Телевизоры' }
  ];

  const filteredProducts = getSortedProducts(
    products.filter(product => {
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        return product.name.toLowerCase().includes(query) ||
               product.brand?.toLowerCase().includes(query);
      }
      return true;
    })
  );

  const addToCart = (id, quantityToAdd) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === id);
      if (existing) {
        return prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const increaseQuantityInModal = (id) => {
    const item = cart.find(item => item.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decreaseQuantityInModal = (id) => {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) updateQuantity(id, item.quantity - 1);
    else if (item && item.quantity === 1) removeItem(id);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Routes>
      <Route path="/" element={
        <div className="app-container">
          <header className="app-header">
            <h1>Магазин электроники</h1>
            <div className="header-right">
              <input 
                type="text"
                placeholder="Поиск по сайту"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <CartIcon itemCount={totalItems} onClick={() => setIsModalOpen(true)} />
            </div>
          </header>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

{/*сортировка*/}

          <div className="sort-section">  
            <div className="sort-info">
              {searchQuery && <span>Поиск: "<strong>{searchQuery}</strong>" | </span>}
              Товаров: <strong>{filteredProducts.length}</strong>
            </div>
            <select 
              className="select-items"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="" disabled>Сортировать</option>
              <option value="По возрастанию цены">По возрастанию цены</option>
              <option value="По убыванию цены">По убыванию цены</option>
            </select>
          </div>

            {/*товар*/}

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              {searchQuery ? 'Товары не найдены' : 'Нет товаров в этой категории'}
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id + '-' + index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  quantityInCart={cart.find(item => item.id === product.id)?.quantity || 0}
                  onAddToCart={addToCart}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>
          )}

  {/*корзинка*/}

          {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                <h2>Корзина</h2>
                {cart.length === 0 ? (
                  <p>Корзина пуста</p>
                ) : (
                  <>
                    <ul className="cart-list">
                      {cart.map(item => (
                        <li key={item.id} className="cart-item">
                          <div className="cart-item-info">
                            <strong>{item.name}</strong>
                          </div>
                          <div className="cart-item-controls">
                            <button onClick={() => decreaseQuantityInModal(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantityInModal(item.id)}>+</button>
                            <button onClick={() => removeItem(item.id)} className="remove-btn">Корзина</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="cart-total">Итого: <strong>{totalPrice} ₽</strong></div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      } />

       {/*страничка товара*/}
       
      <Route path="/product/:id" element={
        <ProductPage 
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      } />
    </Routes>
  );
}

export default App;