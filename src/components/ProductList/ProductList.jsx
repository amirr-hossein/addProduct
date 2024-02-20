import Button from "../Ui/Button/Button";
import React from "react";
const ProductList = (props) => {
  const handleDeleteProduct = (productId) => {
    props.delete(productId);
  };
  return (
    <>
      <table className="">
        <tr>
          <th>نام محصول</th>
          <th>تعداد</th>
          <th>عملیات</th>
        </tr>
        {props.products.map((item) => (
          <tr
          key={`${item.id}-${item.name}-${item.number}`}
            className=""
          >
            <td className="">
              {item.name}
            </td>
            <td className="">
              {item.number}
            </td>
            <Button click={() => handleDeleteProduct(item.id)}>delete</Button>
          </tr>
        ))}
      </table>
    </>
  );
};
export default ProductList;
