import Input from "../Ui/Input/Input.jsx";
import { useState, useEffect, useRef } from "react";
const ProductSearch = (props) => {
  const { onLoadProducts } = props;
  const [productSearch, setProductSearch] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (productSearch === inputRef.current.value) {
        const query =
          productSearch.length === 0
            ? ""
            : `?orderBy="name"&equalTo="${productSearch}"`;
        fetch(
          "https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json" +
            query
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            const loadedData = [];
            for (const item in responseData) {
              loadedData.push({
                id: item,
                name: responseData[item].name,
                number: responseData[item].number,
              });
            }
            onLoadProducts(loadedData);
          })
          .catch((error) => {
            setError(true);
            console.log(error);
          });
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [productSearch, onLoadProducts, inputRef]);
  return (
    <>
      <form className="" action="">
        <Input
          refs={inputRef}
          value={productSearch}
          change={(e) => setProductSearch(e.target.value)}
          type={"search"}
          className={""}
          dir={"rtl"}
        />
        <span
          className=""
          style={{
            transform: productSearch ? "translateY(-24px)" : null,
            fontSize: productSearch ? "12px" : null,
          }}
        >
          جستجو
        </span>
      </form>
      {error ? (
        <div className="">
          <img src="./src/assets/img/charecterLogoNotProduct.png" alt="" />
        </div>
      ) : null}
    </>
  );
};
export default ProductSearch;
