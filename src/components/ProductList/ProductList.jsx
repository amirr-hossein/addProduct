import React from "react";
const ProductList=(props)=>{
    return(
        <>
            <ul className="h-[243px] overflow-auto space-y-6">
                {props.products.map((item) => (
                    <li key={item.id} className="bg-[#7FC7D9] w-[292px] h-[65px] rounded-[20px]">
                        <span>{item.name}</span>
                        <span>{item.number}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductList