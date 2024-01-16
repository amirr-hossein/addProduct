import React from "react";
const ProductList=(props)=>{
    return(
        <>
            <ul>
                {props.products.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.number}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductList