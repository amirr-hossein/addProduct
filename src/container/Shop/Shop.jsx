  import ProductForm from "../../components/ProductForm/ProductForm.jsx";
  import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
  import React, { useCallback } from "react";
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
      // data.name در Firebase آیدی است که از سمت سرور تولید شده است
      const firebaseId = data.name;
      
      // اضافه کردن آیدی از Firebase به ایتم
      dispath({
        type: "ADD",
        product: { ...item, id: firebaseId },
      });

        });
      });
    };

    console.log(product)
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
