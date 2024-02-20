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
      <div>
        <h1 className="text-[48px] text-[#EA526F] font-bold mb-[32px]">محصولات موجود</h1>
        <form className="hoverInput relative flex flex-col mb-[32px]" action="">
          <Input
            refs={inputRef}
            value={productSearch}
            change={(e) => setProductSearch(e.target.value)}
            type={"search"}
            className={"outline-none border-b-[3px] border-b-[#6B9080] sm:w-[552px] w-[328px] sm:h-[58px] h-[46px] bg-transparent"}
            dir={"rtl"}
          />
          <span
              className="pointer-events-none absolute text-[#6B9080] sm:text-[24px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px]"
              style={{
                transform: productSearch ? "translateY(-40px)" : null,
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
      </div>
    </>
  );
};
export default ProductSearch;
