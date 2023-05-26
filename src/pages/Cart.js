import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components"; 
import { useCart } from '../context/CartContext';
import { Link } from "react-router-dom";


export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");


  return (
    <main>
      <section className="cart">
        <h1 className="text-black dark:text-white">Cart Items: {cartList.length} / ${total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
          )) }
          {cartList.length > 0 && (
            <div className="checkout-container">
              <Link to="/" className="checkout">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Checkout</button>
              </Link>
            </div>
          )}
      </section>
    </main>
  )
}
