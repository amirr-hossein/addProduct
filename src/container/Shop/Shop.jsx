import ProductForm from "../../components/ProductForm/ProductForm.jsx";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
import React, { useCallback, useReducer } from "react";
const Shop = (props) => {
  const { dispath, product } = props;
  const addProduct = (item) => {
    fetch(
      "https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      response.json().then((responseDate) => {
        dispath({
          type: "ADD",
          product: { id: ProductForm.id, ...item },
        });
      });
    });
  };
  const searchProductHandler = useCallback((items) => {
    dispath({ type: "SET", products: items });
  }, []);
  return (
    <>
      <ProductForm add={addProduct} themeBtn={props.themeForm} />
      <ProductSearch onLoadProducts={searchProductHandler} />
    </>
  );
};
export default Shop;
