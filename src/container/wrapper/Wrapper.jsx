import React, { useContext,useReducer } from "react";
import Shop from "../Shop/Shop";
import Auth from "../../components/auth/Authtication";
import { AuthContext } from "../../context/Auth";
import useDarkMode from "../../hooks/Them";
import ProductList from "../../components/ProductList/ProductList";
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
const Wrapper = (props) => {
  const [products, dispath] = useReducer(productReducer, []);
  const [theme, toggleTheme] = useDarkMode();
  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = (
      <>
        <div
          className="app flex justify-center items-center flex-col h-[78vh]"
        >
          <Shop produc={products} dispath={dispath} themeForm={props.theme} />
        </div>
        <div className="absolute bottom-[24px] right-[50%] productList">
        <ProductList products={products} />
        </div>
      </>
    );
  }
  return content;
};
export default Wrapper;