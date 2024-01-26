import ProductForm from "../../components/ProductForm/ProductForm.jsx";
import ProductSearch from "../../components/ProductSearch/ProductSearch.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import React,{useState,useEffect} from "react";
const Shop=()=>{
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch("https://practice-react-d0abc-default-rtdb.firebaseio.com/newProducts.json")
            .then((response)=>{
                return response.json()
            })
            .then((responseDate)=>{
                const loadedData=[]
                for (const item in responseDate){
                    loadedData.push({
                        id:item,
                        name:responseDate[item].name,
                        number:responseDate[item].number
                    })
                }
                setProducts(loadedData)
            })
    },[])
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
    const searchProductHandler=(items)=>{
        setProducts(items)
    }
    return(
        <>
            <ProductForm add={addProduct}/>
            <ProductSearch onLoadProducts={searchProductHandler}/>
            <ProductList products={products}/>
        </>
    )
}
export default Shop