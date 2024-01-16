import Input from "../Ui/Input/Input.jsx";
import Button from "../Ui/Button/Button.jsx";
import {useState} from "react";

const ProductForm=(props)=>{
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const submitHandler=(event)=>{
        event.preventDefault()
        props.add({name:name,number:number})
    }
    return(
        <>
            <form action="">
                <label htmlFor={"text"}>Book Name:</label>
                <Input id={"text"} type={"text"} values={name} change={(event) => setName(event.target.value)}/>
                <br/>
                <label htmlFor={"number"}>Number Of Book:</label>
                <Input id={"number"} type={"number"} values={number} change={(event) => setNumber(event.target.value)}/>
                <br/>
                <Button click={submitHandler}>submit</Button>
            </form>
        </>
    )
}
export default ProductForm