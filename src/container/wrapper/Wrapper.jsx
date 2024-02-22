import React, { useReducer,useCallback,useState } from "react";
import Shop from "../Shop/Shop";
import useDarkMode from "../../hooks/Them";
import ProductList from "../../components/ProductList/ProductList";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";

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
  const searchProductHandler = useCallback((items) => {
    dispath({ type: "SET", products: items });
  }, []);
  const [errorFromChild, setErrorFromChild] = useState(false);

  const handleErrorFromChild = (error) => {
    setErrorFromChild(error);
  };
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between 2xl:mx-[156px]">
        <div className="app">
          <Shop product={products} dispath={dispath} themeForm={props.theme} />
        </div>
        <div className="productList">
          <ProductSearch onLoadProducts={searchProductHandler} onError={handleErrorFromChild} themeForm={props.theme}/>
          <ProductList
            products={Object.values(products)}
            delete={deleteProdct}
            error={errorFromChild}
          />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
