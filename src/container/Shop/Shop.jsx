import ProductForm from "../../components/ProductForm/ProductForm.jsx";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import React, { useCallback, useReducer } from "react";
const productReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.products;
    case "ADD":
      return [...state, action.product];
    default:
      throw new Error("Error");
  }
};
const Shop = (props) => {
  const [products, dispath] = useReducer(productReducer, []);
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
          product: { id: responseDate.name, ...item },
        });
      });
    })
  };
  const searchProductHandler = useCallback((items) => {
    dispath({ type: "SET", products: items });
  }, []);
  return (
    <>
      <ProductForm add={addProduct} themeBtn={props.themeForm} />
      <ProductSearch onLoadProducts={searchProductHandler} />
      <ProductList products={products} />
    </>
  );
};
export default Shop;
