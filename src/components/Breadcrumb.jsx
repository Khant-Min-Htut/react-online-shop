import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div className="flex gap-2 w-full mb-3">
      <Link to={"/"} className="text-gray-500">
        Home
      </Link>
      <span>/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumb;
