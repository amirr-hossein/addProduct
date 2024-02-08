import React, { useContext, useReducer } from "react";
import Shop from "../Shop/Shop";
// import Auth from "../../components/auth/Authtication";
// import { AuthContext } from "../../context/Auth";
import useDarkMode from "../../hooks/Them";
import ProductList from "../../components/ProductList/ProductList";
// import AuthSignUp from "../../components/auth/SignUp";
// import Login from "../../components/auth/Login";
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

  // const authContext = useContext(AuthContext);
  // let content = <AuthSignUp />;
  // if (authContext.isAuth) {
  //   content = (
  return (
    <>
      <div className="app flex justify-center items-center flex-col h-[78vh]">
        <Shop product={products} dispath={dispath} themeForm={props.theme} />
      </div>
      <div className="absolute bottom-[24px] right-[50%] productList">
        {/* <ProductList products={products} delete={deleteProdct} /> */}
        {/* // در جایی که ProductList فراخوانی می‌شود */}
        <ProductList products={Object.values(products)} delete={deleteProdct} />
      </div>
      {/* <div className="app flex justify-center items-center flex-col h-[78vh]">
          <Shop product={products} dispath={dispath} themeForm={props.theme} />
        </div>
        <div className="absolute bottom-[24px] right-[50%] productList">
          {/* <ProductList products={products} delete={deleteProdct} /> */}
      {/* // در جایی که ProductList فراخوانی می‌شود */}
      {/* <ProductList
            products={Object.values(products)}
            delete={deleteProdct}
          />
        </div> */}
    </>
  );
  // );
  // } else {
  //   <>
  //       <Login />

  //   </>;
  // }

  // return content;
};

export default Wrapper;
