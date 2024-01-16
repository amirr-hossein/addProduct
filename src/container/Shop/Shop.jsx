import ProductForm from "../../components/ProductForm/ProductForm.jsx";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import React,{useState} from "react";
const Shop=()=>{
    const [products, setProducts]=useState([])
    const addProduct=(item)=>{
        fetch("https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{
            response.json()
                .then((responseDate)=>{
                    setProducts((prevState)=>{
                        return[
                            ...prevState,
                            {
                                id:responseDate.name,
                                ...item,
                            },
                        ]
                    })
                })
        })
    }
    return(
        <>
            <ProductForm add={addProduct}/>
            <ProductSearch/>
            <ProductList products={products}/>
        </>
    )
}
export default Shop