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
      <form className="flex flex-col items-end relative mt-[15px]" action="">
        <Input
          refs={inputRef}
          value={productSearch}
          change={(e) => setProductSearch(e.target.value)}
          type={"search"}
          className={
            "w-[250px] bg-[#DCF2F1] border-b-[#0F1035] border-b-2 border-solid outline-none"
          }
          dir={"rtl"}
        />
        <span
          className="pointer-events-none absolute text-[#365486] text-[20px] font-bold bottom-0 transition-all"
          style={{
            transform: productSearch ? "translateY(-24px)" : "translateY(0)",
            fontSize: productSearch ? "15px" : "20px",
          }}
        >
          جستجو
        </span>
      </form>
      {error ? (
        <div className="w-full text-center">
          <p className="mt-[24px] text-[#365486] text-[30px] font-bold">
            واکنشی انجام نشد
          </p>
        </div>
      ) : null}
    </>
  );
};
export default ProductSearch;
