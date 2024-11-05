import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCardStore";

const Header = () => {
  const { carts } = useCartStore();
  return (
    <header className="mt-5">
      <Container className="">
        <div className="flex justify-between align-center">
          <Link to={"/"} className="font-bold text-4xl">
            Online Shop
          </Link>
          <Link
            to="/My-Cart"
            className="border border-black px-4 py-2 relative "
          >
            My Cart
            <span
              className="bg-red-500 text-white px-2 py-1 text-xs absolute top-0 right-0
                translate-x-1/2 -translate-y-1/2"
            >
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
