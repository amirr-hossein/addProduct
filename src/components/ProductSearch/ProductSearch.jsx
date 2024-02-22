  import Input from "../Ui/Input/Input.jsx";
  import { useState, useEffect, useRef } from "react";
  const ProductSearch = (props) => {
    const { onLoadProducts, onError } = props;
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
              onError(error);
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
          <h1 className="xl:text-[48px] lg:text-[38px] md:text-[34px] text-[32px] text-[#EA526F] font-bold lg:mb-[32px] md:mb-[15px] mb-[16px]">محصولات موجود</h1>
          <form className="hoverInput relative flex flex-col lg:mb-[32px] md:mb-[22px] mb-[24px]" action="">
            <Input
              refs={inputRef}
              value={productSearch}
              change={(e) => setProductSearch(e.target.value)}
              type={"search"}
              className={"outline-none border-b-[3px] border-b-[#6B9080] md:pr-0 pr-[25px] xl:w-[552px] lg:w-[450px] xl:h-[58px] md:w-[365px] lg:h-[54px] md:h-[50px] bg-transparent"}
              dir={"rtl"}
              style={{
                color: props.themeBtn === "dark" ? "#000" : "#fff",
              }}
            />
            <span
                className={`pointer-events-none absolute text-[#6B9080] xl:text-[24px] lg:text-[20px] font-regular bottom-[3px] transition-all mb-[12px] mr-[25px] md:mr-0 ${
                  productSearch? "active" : ""
                }`}
            >
              جستجو
            </span>
          </form>
        </div>
      </>
    );
  };
  export default ProductSearch;
