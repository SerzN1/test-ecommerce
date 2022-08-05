import { useCart } from '../../context/cart';

function Cart() {
  const { items } = useCart();
  const makeOrder = () => {};
  return (
    <>
      <h1>Cart</h1>
      {Object.keys(items).map((id) => (
        <p key={id}>
          {id}: {items[id]} {items[id] === 1 ? 'item' : 'items'}
        </p>
      ))}
      <button type="button" onClick={makeOrder} className="btn btn-primary">
        Order items
      </button>
    </>
  );
}

export default Cart;
