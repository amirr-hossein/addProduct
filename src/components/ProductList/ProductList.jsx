import Button from "../Ui/Button/Button";
import React from "react";
const ProductList = (props) => {
  const handleDeleteProduct = (productId) => {
    props.delete(productId);
  };
  return (
    <>
      <table className="flex flex-col">
        <tr className="flex justify-between">
          <th className="text-[#9CB5AA] font-regular xl:text-[24px] lg:text-[20px] text-[16px] pl-[84px] xl:pl-[157px] lg:pl-[123px] md:pl-[102px]">
            نام محصول
          </th>
          <th className="text-[#9CB5AA] font-regular xl:text-[24px] lg:text-[20px] xl:pl-[157px] lg:pl-[123px] md:pl-[102px] text-[16px] pl-[83px]">
            تعداد
          </th>
          <th className="text-[#9CB5AA] font-regular xl:text-[24px] lg:text-[20px] text-[16px]">عملیات</th>
        </tr>
        {props.products.map((item) => (
          <div className="wrapper xl:h-[66px] xl:w-[552px] lg:w-[450px] lg:h-[60px] md:w-[367px] md:h-[58px] w-full h-[56px] bg-[#fff] border-[1px] border-solid border-[#E6E6E6] mt-[8px] relative">
            <tr key={`${item.id}-${item.name}-${item.number}`} className="">
              <td className="xl:text-[24px] lg:text-[20px] md:text-[17px] text-[16px] font-regular mr-[16px] mt-[16px] absolute">
                {item.name}
              </td>
              <td className="num xl:ml-[240px] lg:ml-[204px] md:ml-[163px] xl:text-[24px] lg:text-[20px] md:text-[17px] font-regular mr-[16px] mt-[16px] absolute left-[50%]">
                {item.number}
              </td>
              <Button
                className={"ml-[16px] mt-[17px] absolute left-0"}
                click={() => handleDeleteProduct(item.id)}
              >
                <svg
                  width="22"
                  height="28"
                  viewBox="0 0 22 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9971 0.60434C9.52378 0.60434 8.33044 1.79767 8.33044 3.271H1.66378C0.927777 3.271 0.330444 3.86833 0.330444 4.60433C0.330444 5.34033 0.927777 5.93766 1.66378 5.93766V21.9376C1.66378 24.8576 4.07044 27.2709 6.99711 27.2709H14.9971C17.9238 27.2709 20.3304 24.8643 20.3304 21.9376V5.93766C21.0664 5.93766 21.6638 5.34033 21.6638 4.60433C21.6638 3.86833 21.0664 3.271 20.3304 3.271H13.6638C13.6638 1.79767 12.4704 0.60434 10.9971 0.60434ZM4.33044 5.93766H17.6638V21.9376C17.6638 23.4003 16.4771 24.6043 15.0384 24.6043L6.99711 24.5629C5.52778 24.5629 4.33044 23.3763 4.33044 21.9376V5.93766ZM8.33044 8.60432C7.59444 8.60432 6.99711 9.20165 6.99711 9.93765V20.6043C6.99711 21.3403 7.59444 21.9376 8.33044 21.9376C9.06644 21.9376 9.66377 21.3403 9.66377 20.6043V9.93765C9.66377 9.20165 9.06644 8.60432 8.33044 8.60432ZM13.6638 8.60432C12.9278 8.60432 12.3304 9.20165 12.3304 9.93765V20.6043C12.3304 21.3403 12.9278 21.9376 13.6638 21.9376C14.3998 21.9376 14.9971 21.3403 14.9971 20.6043V9.93765C14.9971 9.20165 14.3998 8.60432 13.6638 8.60432Z"
                    fill="#E84C29"
                  />
                </svg>
              </Button>
            </tr>
          </div>
        ))}
      </table>
      {props.error ? (
        <div className="flex justify-center">
          <img className="md:w-[290px] w-[250px] h-[217px] lg:w-[320px] lg:h-[295px] xl:w-[330px] xl:h-[270px] md:h-[340px] mt-[15px]" src="./src/assets/img/charecterLogoNotProduct.png" alt="" />
        </div>
      ) : null}
    </>
  );
};
export default ProductList;
