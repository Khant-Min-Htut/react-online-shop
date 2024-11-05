import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" px-4 W-full md:w-[720px] lg:w-[1000px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
