import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCardStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ carts: { id, productId, quantity } }) => {
  const { products } = useProductStore();

  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((product) => product.id == productId);

  const cost = product.price * quantity;
  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item removed from cart");
        }
      });
    }
  };
  return (
    <div className="">
      <div className="">
        <div className="border border-black overflow-y-auto mb-5 p-5 grid grid-cols-11 xs:grid-cols-14  gap-2">
          <div className="col-span-2">
            <img src={product.image} className="h-16" />
          </div>
          <div className="col-span-3">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <div className="col-span-3 ">
            <p className="mb-2">Quantity</p>
            <div className="flex gap-4">
              <button
                className="bg-black text-white px-2 py-0.5"
                onClick={handleDecrease}
              >
                -
              </button>
              {quantity}
              <button
                onClick={handleIncrease}
                className="bg-black text-white px-2 py-0.5"
              >
                +
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <p
              className="text-end text-2xl
        font-bold mt-3"
            >
              {cost.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
