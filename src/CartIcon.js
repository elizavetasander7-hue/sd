function CartIcon({ itemCount, onClick }) {
  return (
    <button onClick={onClick} className="cart-icon-button">
      🛒
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  );
}

export default CartIcon;