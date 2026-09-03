import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/slices/cartSlice";

function CartSummary() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <aside className="cart-summary" id="cart" aria-label="Shopping cart">
      <div className="cart-heading">
        <div>
          <p className="section-label">REDUX CART</p>
          <h2>Your rental cart</h2>
        </div>
        {items.length > 0 && (
          <button type="button" className="cart-clear" onClick={() => dispatch(clearCart())}>
            Clear
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="cart-empty">Add an available car to see it here.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <span>
                  <strong>{item.name}</strong>
                  <small>${item.price} / day</small>
                </span>
                <span className="cart-item-actions">
                  <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <b>{item.quantity}</b>
                  <button type="button" onClick={() => dispatch(addToCart(item))}>+</button>
                  <button type="button" className="remove-item" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </span>
              </div>
            ))}
          </div>
          <strong className="cart-total">Estimated total: ${total}</strong>
        </>
      )}
    </aside>
  );
}

export default CartSummary;
