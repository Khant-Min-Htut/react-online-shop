import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCardStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();

  const { carts, addCart } = useCartStore();

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };
  const handleAddBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My Cart");
  };
  const currentProduct = products.find(
    (product) => product.slug == productSlug
  );

  return (
    <Container className="px-5 mt-10">
      <Breadcrumb currentPageTitle="ProductDetail" />
      <div className="border border-black p-9 mb-10">
        <div className="grid gird-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className=" h-[200px]  md:mx-auto"
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5 ">
            <p className="font-bold text-2xl">{currentProduct.title}</p>
            <p className="border border-black px-1 py-1 inline-block bg-gray-500 text-white">
              {currentProduct.category}
            </p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-end mt-auto w-full">
              <p className=" text-3 xl">${currentProduct.price}</p>
            </div>
            {carts.find((cart) => cart.productId === currentProduct.id) ? (
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
      </div>
    </Container>
  );
};

export default ProductDetail;
