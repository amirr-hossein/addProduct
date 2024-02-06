// import ProductForm from "../../components/ProductForm/ProductForm.jsx";
// import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
// import React, { useCallback, useEffect } from "react";
// const Shop = (props) => {
//   const { dispath, product } = props;
//   // useEffect(()=>{
//   //   const addProduct = (item) => {
//   //     fetch(
//   //       "https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json",
//   //       {
//   //         method: "POST",
//   //         body: JSON.stringify(item),
//   //         headers: { "Content-Type": "application/json" },
//   //       }
//   //     ).then((response) => {
//   //       response.json().then(() => {
//   //         dispath({
//   //           type: "ADD",
//   //           product: { id: product.id, ...item },
//   //         });
//   //       });
//   //     });
//   //   };
//   //   return addProduct
//   // },[])
//   const addProduct = useCallback(
//     (item) => {
//       fetch(
//         "https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json",
//         {
//           method: "POST",
//           body: JSON.stringify(item),
//           headers: { "Content-Type": "application/json" },
//         }
//       ).then((response) => {
//         response.json().then(() => {
//           dispath({
//             type: "ADD",
//             product: { id: product.id, ...item },
//           });
//         });
//       });
//     },
//     [dispath, product]
//   );
//   const updateProducts = useCallback(() => {
//     // درخواست به سرور برای به‌روزرسانی اطلاعات
//     fetch("https://example.com/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         // به‌روزرسانی استیت با اطلاعات جدید
//         dispath({ type: "SET", products: data });
//       })
//       .catch((error) => {
//         console.error("Error updating products:", error.message);
//       });
//   }, [dispath]);
//   useEffect(() => {
//     // اجرای تابع به‌روزرسانی هنگام نمایش کامپوننت
//     updateProducts();
//   }, [updateProducts]);
//   console.log(product);
//   const searchProductHandler = useCallback((items) => {
//     dispath({ type: "SET", products: items });
//   }, []);
//   return (
//     <>
//       <ProductForm add={addProduct} themeBtn={props.themeForm} />
//       <ProductSearch onLoadProducts={searchProductHandler} />
//     </>
//   );
// };
// export default Shop;
import React, { useCallback } from "react";
import ProductForm from "../../components/ProductForm/ProductForm.jsx";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
const Shop = (props) => {
  const { dispath, product } = props;

  const updateProducts = useCallback(async () => {
    try {
      // درخواست به سرور برای به‌روزرسانی اطلاعات
      const response = await fetch("https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json");
      const data = await response.json();
  
      // به‌روزرسانی استیت با اطلاعات جدید
      dispath({ type: "SET", products: data });
    } catch (error) {
      console.error("Error updating products:", error.message);
    }
  }, [dispath]);
  
  

  const addProduct = useCallback(
    async (item) => {
      try {
        // افزودن محصول
        await fetch(
          "https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json",
          {
            method: "POST",
            body: JSON.stringify({ ...item, productId: product.id }),
            headers: { "Content-Type": "application/json" },
          }
        );

        // به‌روزرسانی استیت با اطلاعات جدید
        dispath({
          type: "ADD",
          product: { id: product.id, ...item },
        });

        // همزمان با افزودن، آپدیت هم انجام دهید
        updateProducts();
      } catch (error) {
        console.error("Error adding product:", error.message);
      }
    },
    [dispath, product, updateProducts]
  );
  const searchProductHandler = useCallback(
    (items) => {
      dispath({ type: "SET", products: items });
    },
    [dispath]
  );

  return (
    <>
      <ProductForm add={addProduct} themeBtn={props.themeForm} />
      <ProductSearch onLoadProducts={searchProductHandler} />
    </>
  );
};

export default Shop;
