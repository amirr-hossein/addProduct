import Input from "../Ui/Input/Input.jsx";
import { useState, useEffect, useRef } from "react";
const ProductSearch = (props) => {
  const { onLoadProducts } = props;
  const [productSearch, setProductSearch] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
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
          .catch(() => {
            setError(true);
          });
      }
    }, 500);
  }, [productSearch, onLoadProducts, inputRef]);
  return (
    <>
      <form action="">
        <label htmlFor={"search"}>Search:</label>
        <Input
          refs={inputRef}
          id={"search"}
          value={productSearch}
          change={(e) => setProductSearch(e.target.value)}
          type={"search"}
        />
        {error ? <p>fetch failed</p> : null}
      </form>
    </>
  );
};
export default ProductSearch;
