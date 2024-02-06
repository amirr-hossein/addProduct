import Button from "../Ui/Button/Button";
import React from "react";
const ProductList = (props) => {
  if (!Array.isArray(props.products)) {
    console.error("props.products is not an array:", props.products);
    return null; // یا یک خروجی دلخواه دیگر
  }
  const handleDeleteProduct = (productId) => {
    props.delete(productId);
  };
  return (
    <>
      <ul className="h-[243px] overflow-auto space-y-6">
        {props.products.map((product) => (
          <li
            key={product.id}
            className="bg-[#7FC7D9] w-[292px] h-[65px] rounded-[20px] flex justify-between flex-row-reverse"
          >
            <span className="text-[21px] font-bold mr-[16px] mt-[20px]">
              {product.name}
            </span>
            <span className="text-[21px] font-bold ml-[16px] mt-[20px]">
              {product.number}
            </span>
            <Button click={() => handleDeleteProduct(product.id)}>delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductList;
