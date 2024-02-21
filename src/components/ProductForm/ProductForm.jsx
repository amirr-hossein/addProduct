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
        <h1 className="xl:text-[48px] lg:text-[38px] md:text-[34px] text-[32px] font-bold text-[#EA526F] lg:mb-[32px] md:mb-[15px] mb-[20px]">
          اضافه کردن محصولات
        </h1>
        <form className="" action="">
          <div className="hoverInput relative flex flex-col lg:mb-[32px] md:mb-[22px] mb-[32px]">
            <Input
              type={"text"}
              value={state.name}
              change={(event) =>
                dispatch({ type: "name", checkingForm: event.target.value })
              }
              dir={"rtl"}
              className={`outline-none border-b-[3px] border-b-[#6B9080] md:pr-0 pr-[25px] xl:w-[456px] lg:w-[400px] xl:h-[58px] lg:h-[54px] md:w-[300px] md:h-[50px] bg-transparent`}
              style={{
                color: props.themeBtn === "dark" ? "#000" : "#fff",
              }}
            />
            <span
              className={`pointer-events-none absolute text-[#6B9080] xl:text-[24px] lg:text-[20px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px] mr-[25px] md:mr-0 ${
                state.name ? "active" : ""
              }`}
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
                "outline-none border-b-[3px] border-b-[#6B9080] md:pr-0 pr-[25px] xl:w-[456px] lg:w-[400px] xl:h-[58px] lg:h-[54px] md:w-[300px] md:h-[50px] bg-transparent text-white"
              }
              style={{
                color: props.themeBtn === "dark" ? "#000" : "#fff",
              }}
            />
            <span
              className={`pointer-events-none absolute text-[#6B9080] xl:text-[24px] lg:text-[20px] font-regular bottom-[3px] transition-all mb-[12px] mr-[25px] md:mr-0 ${
                state.number ? "active" : ""
              }`}
            >
              تعداد محصول
            </span>
          </div>
          <Button
            className={
              "text-white bg-[#6B9080] xl:w-[456px] lg:w-[400px] xl:h-[58px] lg:h-[54px] md:w-[300px] md:h-[50px] w-full h-[46px] rounded-[16px] text-[20px] font-regular mb-[32px] md:mb-0"
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
