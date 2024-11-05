import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCardStore";
import toast from "react-hot-toast";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,

    // yeah we are poor Thats All I can say
  },
}) => {
  const { carts, addCart } = useCartStore();

  const navigate = useNavigate();

  const handleAddBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My Cart");
  };
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };
  const handleOpenDetail = () => {
    navigate(`/product-detail/${slug}`);
  };
  return (
    <div
      onClick={handleOpenDetail}
      className="border border-black px-4 py-2 me-2 flex flex-col itens-start  gap-3 mb-4"
    >
      <img src={image} alt="" className="h-[200px] mx-auto " />
      <p className="font-bold line-clamp-1">{title}</p>
      <Rating rate={rate} className="" />
      <div className="flex justify-between items-end mt-auto w-full">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddBtn}
            className="border border-black bg-black px-3 py-2 text-white "
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="border border-black px-3 py-1 text-sm"
          >
            Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
