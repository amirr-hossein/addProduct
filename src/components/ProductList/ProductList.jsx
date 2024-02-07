import Button from "../Ui/Button/Button";
import React from "react";
const ProductList = (props) => {
  const handleDeleteProduct = (productId) => {
    props.delete(productId);
  };
  return (
    <>
      <ul className="h-[243px] overflow-auto space-y-6">
        {props.products.map((item) => (
          <li
          key={`${item.id}-${item.name}-${item.number}`}
            className="bg-[#7FC7D9] w-[292px] h-[65px] rounded-[20px] flex justify-between flex-row-reverse"
          >
            <span className="text-[21px] font-bold mr-[16px] mt-[20px]">
              {item.name}
            </span>
            <span className="text-[21px] font-bold ml-[16px] mt-[20px]">
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
