import Input from "../Ui/Input/Input.jsx";
import Button from "../Ui/Button/Button.jsx";
import { useState, useReducer } from "react";
const initialValue = {
  name: "",
  number: "",
};
const check = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.checkingForm };
    case "number":
      return { ...state, number: action.checkingForm };
    case "reset":
        return initialValue 
  }
};
const ProductForm = (props) => {
  const [state, dispatch] = useReducer(check, initialValue);
  const submitHandler = (event) => {
    event.preventDefault();
    if(state.name&&state.number){
        props.add({ name: state.name, number: state.number });
    }
    dispatch({type:"reset"})
  };
  return (
    <>
      <form action="">
        <label htmlFor={"text"}>Book Name:</label>
        <Input
          id={"text"}
          type={"text"}
          value={state.name}
          change={(event) =>
            dispatch({ type: "name", checkingForm: event.target.value })
          }
          className={"bg-slate-800"}
        />
        <br />
        <label htmlFor={"number"}>Number Of Book:</label>
        <Input
          id={"number"}
          type={"number"}
          value ={state.number}
          change={(event) =>
            dispatch({ type: "number", checkingForm: event.target.value })
          }
        />
        <br />
        <Button click={submitHandler}>submit</Button>
      </form>
    </>
  );
};
export default ProductForm;