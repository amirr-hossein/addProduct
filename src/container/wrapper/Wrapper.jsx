import React, { useReducer } from "react";
import Shop from "../Shop/Shop";
import useDarkMode from "../../hooks/Them";
import ProductList from "../../components/ProductList/ProductList";
const productReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return Object.values(action.products);
    case "ADD":
      return [...state, action.product];
    default:
      throw new Error("Error");
  }
};
const Wrapper = (props) => {
  const [products, dispath] = useReducer(productReducer, []);
  const [theme, toggleTheme] = useDarkMode();

  const deleteProdct = async (productId) => {
    await fetch(
      `https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts/${productId}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        dispath({ type: "SET", products: updatedProducts });
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };
  return (
    <>
      <div className="app">
        <Shop product={products} dispath={dispath} themeForm={props.theme} />
      </div>
      <div className="productList">
        <ProductList products={Object.values(products)} delete={deleteProdct} />
      </div>
    </>
  );
};

export default Wrapper;
