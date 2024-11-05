import React from "react";
import Cart from "./Cart";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCardStore";
import Container from "./Container";
import { Link } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const CartSession = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;

    return pv + cost;
  }, 0);
  const tax = total * 0.05;

  const netTotal = total + tax;
  return (
    <div>
      {carts.map((cart) => (
        <Cart key={cart.id} carts={cart} />
      ))}
      {carts.length === 0 && (
        <img
          src={emptyCart}
          alt="empty"
          className="w-[200px] block mx-auto mt-10 "
        />
      )}
      <div className="">
        <div className="absolute bottom-10 w-full left-0 stick bg-white bottom-0  text-black p-4">
          <Container className="px-5">
            <div className="flex flex-direction-row justify-end border-t border-black gap-5 mb-5 ">
              <div className="text-right">
                <p className="font-bold">Total</p>
                <p className="text-2xl">{total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Tax(10%)</p>
                <p className="text-2xl">{tax.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Net Total</p>
                <p className="text-2xl">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-end mb-10">
              <Link className="border border-black px-3 py-2 bg-black text-white">
                Order Now
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CartSession;
