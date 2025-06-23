

const Cart = ({ cartItems }) => {
  return (
    <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
            <div>
                <p>No items Added</p>
                <button>Go to Shop</button>
            </div>
        ) : (
            <ul>
                {cartItems.map((cartItem, index) => (
                    <li key={ index }> { cartItem.name } </li>
                ))}
            </ul>
        )}
    </div>
  );
}

export default Cart;
