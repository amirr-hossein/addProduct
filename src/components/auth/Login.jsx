import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
const AuthSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  const signInHandler = async (e) => {
    e.preventDefault();
    authContext.login(email, password);
    authContext.signup(email, password);
  };
  return (
    <div className="flex lg:flex-row flex-col-reverse h-[100vh] justify-center items-center">
      <div className="flex flex-col">
        <h2 className="text-[#EA526F] sm:text-[48px] text-[40px] font-bold text-start mb-[32px]">
          ورود یا ثبت نام
        </h2>
        <form className="flex flex-col" onSubmit={signInHandler}>
          <div className="hoverInput relative flex flex-col">
            <Input
              type={"text"}
              value={email}
              change={(e) => setEmail(e.target.value)}
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] sm:w-[456px] w-[328px] sm:h-[58px] h-[46px]"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] sm:text-[24px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px]"
              style={{
                transform: email ? "translateY(-40px)" : null,
                fontSize:email?"16px":null,
              }}
            >
              ایمیل
            </span>
          </div>
          <div className="mt-[24px] hoverInput relative flex flex-col">
            <Input
              type={"password"}
              value={password}
              change={(e) => setPassword(e.target.value)}
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] sm:w-[456px] w-[328px] sm:h-[58px] h-[46px]"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] sm:text-[24px] text-[16px] font-regular bottom-[3px] transition-all mb-[12px]"
              style={{
                transform: password ? "translateY(-40px)" : null,
                fontSize:password?"16px":null,
              }}
            >
              رمز عبور
            </span>
          </div>
          <Button
            type={"submit"}
            className={
              "sm:w-[456px] w-[328px] sm:h-[58px] h-[46px] bg-[#6B9080] rounded-[16px] mt-[24px] text-[#fff] sm:text-[24px] text-[16px]"
            }
          >
            ورود یا ثبت نام
          </Button>
        </form>
      </div>

        <img className="w-[360px] h-[360px] sm:w-[552px] sm:h-[552px]" src="./src/assets/img/charecterLogoLogin.png" alt="" />

    </div>
  );
};

export default AuthSignIn;
