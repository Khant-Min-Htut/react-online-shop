import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSession from "../components/CartSession";
import Container from "../components/Container";

const MyCart = () => {
  return (
    <div>
      <Container>
        <Breadcrumb currentPageTitle="MyCart" />
        <CartSession />
      </Container>
    </div>
  );
};

export default MyCart;
