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
      return initialValue;
  }
};
const ProductForm = (props) => {
  const [state, dispatch] = useReducer(check, initialValue);
  const submitHandler = (event) => {
    event.preventDefault();
    if (state.name && state.number) {
      props.add({ name: state.name, number: state.number });
    }
    dispatch({ type: "reset" });
  };
  return (
    <>
      <h1 className="text-titleAddProduct font-black mb-[63px]">
        اضافه کردن محصولات
      </h1>
      <form action="">
        <label htmlFor={"text"}>Book Name:</label>
        <Input
          id={"text"}
          type={"text"}
          value={state.name}
          change={(event) =>
            dispatch({ type: "name", checkingForm: event.target.value })
          }
          className={""}
        />
        <br />
        <label htmlFor={"number"}>Number Of Book:</label>
        <Input
          id={"number"}
          type={"number"}
          value={state.number}
          change={(event) =>
            dispatch({ type: "number", checkingForm: event.target.value })
          }
        />
        <br />
        <Button
          className={"w-[292px] h-[74px] opacity-[70%] rounded-[20px]"}
          style={{
            backgroundColor: props.themeBtn=== "dark"?"#7FC7D9":"#0F1035",
            color: props.themeBtn === "dark" ? "#000" : "#DCF2F1",
          }}
          click={submitHandler}
        >
          submit
        </Button>
      </form>
    </>
  );
};
export default ProductForm;
