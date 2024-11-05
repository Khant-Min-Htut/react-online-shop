import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategoryName = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();

  return (
    <section>
      <Container>
        <p className="text-gray-500 text-1xl px-4">{title}</p>
        <div className="px-4 py-2 flex text-nowrap overflow-scroll category-button-group">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              current={category.isActive}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryName;
