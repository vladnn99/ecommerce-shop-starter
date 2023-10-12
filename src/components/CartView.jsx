import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
// import cart contex
import { CartContext } from "../contexts/CartContext";

const CartView = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="py-32 flex flex-col items-center h-fit min-h-screen w-screen">
      {/* cart title */}
      <div className="uppercase text-2xl font-semibold">
        Shopping Bag {`(${itemAmount})`}
      </div>
      {/* cart content */}
      <div className="w-[90%] md:w-1/2 max-w-3xl">
        <div className="flex flex-col gap-y-2 border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex w-full justify-between items-center mt-4">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-primary text-white flex p-4 justify-center items-center w-full font-medium mt-4"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartView;
