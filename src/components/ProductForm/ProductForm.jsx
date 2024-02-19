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
      <h1 className="text-[48px] font-bold text-[#EA526F]">اضافه کردن محصولات</h1>
      <form className="" action="">
        <div className="hoverInput">
          <Input
            type={"text"}
            value={state.name}
            change={(event) =>
              dispatch({ type: "name", checkingForm: event.target.value })
            }
            dir={"rtl"}
            className={
              ""
            }
          />
          <span
            className=""
            style={{
              transform: state.name ? "translateY(-24px)" : null,
              fontSize: state.name ? "12px" : null,
            }}
          >
            اسم محصول
          </span>
        </div>
        <div className="hoverInput number-wrapper">
          <Input
            type={"number"}
            value={state.number}
            change={(event) =>
              dispatch({ type: "number", checkingForm: event.target.value })
            }
            dir={"rtl"}
            className={
              ""
            }
          />
          <span
            className=""
            style={{
              transform: state.name ? "translateY(-24px)" : null,
              fontSize: state.name ? "12px" : null,
            }}
          >
            تعداد محصول
          </span>
        </div>
        <Button
          className={
            ""
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
