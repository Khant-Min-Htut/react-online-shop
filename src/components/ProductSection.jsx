import React from "react";
import ProductCart from "./ProductCart";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import ProductDetail from "../pages/ProductDetail";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive === true);

  return (
    <section className="px-4">
      <Container>
        <p className="text-gray-500 text-1xl ">Available Products</p>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grap-5 itens-start">
          {products
            .filter(
              (el) =>
                currentCategory.name === "All" ||
                el.category === currentCategory.name
            )
            .map((product) => (
              <ProductCart product={product} key={product.id} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
