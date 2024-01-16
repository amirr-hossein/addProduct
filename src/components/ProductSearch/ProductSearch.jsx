import Input from "../Ui/Input/Input.jsx";

const ProductSearch=()=>{
    return(
        <>
            <form action="">
                <label htmlFor={"search"}>Search:</label>
                <Input id={"search"} type={"search"}/>
            </form>
        </>
    )
}
export default ProductSearch