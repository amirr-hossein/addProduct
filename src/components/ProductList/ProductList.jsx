import Button from "../Ui/Button/Button";
import React from "react";
const ProductList = (props) => {
  const handleDeleteProduct = (productId) => {
    props.delete(productId);
  };
  return (
    <>
      <ul className="">
        {props.products.map((item) => (
          <li
          key={`${item.id}-${item.name}-${item.number}`}
            className=""
          >
            <span className="">
              {item.name}
            </span>
            <span className="">
              {item.number}
            </span>
            <Button click={() => handleDeleteProduct(item.id)}>delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductList;
