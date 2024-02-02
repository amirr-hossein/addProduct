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
      <form className="flex flex-col items-center" action="">
        <div className="flex flex-col items-end">
          <label htmlFor={"text"}>اسم محصول</label>
          <Input
            id={"text"}
            type={"text"}
            value={state.name}
            change={(event) =>
              dispatch({ type: "name", checkingForm: event.target.value })
            }
            dir={"rtl"}
            className={"w-[250px] bg-[#DCF2F1] border-b-[#0F1035] border-b-2 border-solid outline-none"}
          />
        </div>
        <div className="flex flex-col items-end">
          <label htmlFor={"number"}>تعداد محصول</label>
          <Input
            id={"number"}
            type={"number"}
            value={state.number}
            change={(event) =>
              dispatch({ type: "number", checkingForm: event.target.value })
            }
            dir={"rtl"}
            className={"w-[250px] bg-[#DCF2F1] border-b-[#0F1035] border-b-2 border-solid outline-none"}
          />
        </div>
        <Button
          className={
            "w-[292px] h-[74px] opacity-[70%] rounded-[20px] text-[32px] font-bold mt-[43px] mb-[30px]"
          }
          style={{
            backgroundColor: props.themeBtn === "dark" ? "#7FC7D9" : "#0F1035",
            color: props.themeBtn === "dark" ? "#000" : "#DCF2F1",
          }}
          click={submitHandler}
        >
          ثبت
        </Button>
      </form>
    </>
  );
};
export default ProductForm;
