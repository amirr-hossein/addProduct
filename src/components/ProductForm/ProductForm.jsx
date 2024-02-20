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
      <div>
        <h1 className="text-[48px] font-bold text-[#EA526F] mb-[32px]">
          اضافه کردن محصولات
        </h1>
        <form className="" action="">
          <div className="hoverInput relative flex flex-col mb-[32px]">
            <Input
              type={"text"}
              value={state.name}
              change={(event) =>
                dispatch({ type: "name", checkingForm: event.target.value })
              }
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] sm:w-[456px] w-[328px] sm:h-[58px] h-[46px] bg-transparent"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] sm:text-[24px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px]"
              style={{
                transform: state.name ? "translateY(-40px)" : null,
              }}
            >
              اسم محصول
            </span>
          </div>
          <div className="hoverInput number-wrapper relative flex flex-col mb-[24px]">
            <Input
              type={"number"}
              value={state.number}
              change={(event) =>
                dispatch({ type: "number", checkingForm: event.target.value })
              }
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] sm:w-[456px] w-[328px] sm:h-[58px] h-[46px] bg-transparent"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] sm:text-[24px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px]"
              style={{
                transform: state.number ? "translateY(-40px)" : null,
              }}
            >
              تعداد محصول
            </span>
          </div>
          <Button
            className={
              "text-white bg-[#6B9080] w-[456px] h-[58px] rounded-[16px] text-[24px] font-regular"
            }
            click={submitHandler}
          >
            افزودن محصول
          </Button>
        </form>
      </div>
    </>
  );
};
export default ProductForm;
