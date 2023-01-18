import CartListItem from "./CartListItem";
const CartList = ({ cartList }) => {
  return (
    <div className="mt-4">
      <ul>
        {cartList.map((cart) => (
          <CartListItem key={cart.cartSeq} cart={cart} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
