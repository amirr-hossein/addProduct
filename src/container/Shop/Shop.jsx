import ProductForm from "../../components/ProductForm/ProductForm.jsx";
// import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
import React from "react";
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
      response.json().then((data) => {
        const firebaseId = data.name;
        dispath({
          type: "ADD",
          product: { id: firebaseId,...item },
        });
      }); 
    });
  };

  return (
    <>
      <div className="">
      <ProductForm add={addProduct} themeBtn={props.themeForm} />
      </div>
    </>
  );
};
export default Shop;
