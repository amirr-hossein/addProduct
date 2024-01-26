import Input from "../Ui/Input/Input.jsx";
import {useState,useEffect} from "react";
const ProductSearch=(props)=>{
    const { onLoadProducts } = props
    const [productSearch,setProductSearch]=useState('')
    useEffect(() => {
                const query =
                    productSearch.length === 0
                        ? ''
                        : `?orderBy="name"&equalTo="${productSearch}"`
                fetch('https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json' + query)
                    .then((response) => {
                        return response.json()
                    })
                    .then((responseData) => {
                        const loadedData = []

                        for (const item in responseData) {
                            loadedData.push({
                                id: item,
                                name: responseData[item].name,
                                number: responseData[item].number,
                            })
                        }
                        onLoadProducts(loadedData)
                    })
    }, [productSearch,onLoadProducts])
    return(
        <>
            <form action="">
                <label htmlFor={"search"}>Search:</label>
                <Input id={"search"} value={productSearch} change={(e)=>setProductSearch(e.target.value)} type={"search"}/>
            </form>
        </>
    )
}
export default ProductSearch