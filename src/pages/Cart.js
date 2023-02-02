import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import Layout from "../components/base/Layout";
import CartContainer from "../components/cart/CartContainer";
import CartEmpty from "../components/cart/CartEmpty";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <>
      <Helmet>
        <title>카트</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <Layout>
        <div className="container max-w-6xl px-5 py-12">
          <h2 className="pb-4 font-JUA text-4xl">딜리버리 카트</h2>
          {cartList && cartList && cartList.length !== 0 ? (
            <CartContainer cartList={cartList} />
          ) : (
            <CartEmpty />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Cart;
