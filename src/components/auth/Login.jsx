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
    <div className="flex flex-row-reverse h-[100vh] justify-center items-center">
      <div className="flex flex-col">
        <h2 className="text-[#EA526F] text-[48px] font-bold text-end mb-[32px]">
          ورود یا ثبت نام
        </h2>
        <form className="flex flex-col" onSubmit={signInHandler}>
          <div className="hoverInput relative flex flex-col items-end">
            <Input
              type={"text"}
              value={email}
              change={(e) => setEmail(e.target.value)}
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] w-[456px] h-[58px]"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] text-[24px] font-regular bottom-[3px] transition-all"
              style={{
                transform: email ? "translateY(-40px)" : null,
                fontSize: email ? "16px" : null,
              }}
            >
              ایمیل
            </span>
          </div>
          <div className="mt-[24px] hoverInput relative flex flex-col items-end">
            <Input
              type={"password"}
              value={password}
              change={(e) => setPassword(e.target.value)}
              dir={"rtl"}
              className={
                "outline-none border-b-[3px] border-b-[#6B9080] w-[456px] h-[58px]"
              }
            />
            <span
              className="pointer-events-none absolute text-[#6B9080] text-[24px] font-regular bottom-[3px] transition-all"
              style={{
                transform: password ? "translateY(-40px)" : null,
                fontSize: password ? "16px" : null,
              }}
            >
              رمز عبور
            </span>
          </div>
          <Button
            type={"submit"}
            className={
              "w-[456px] h-[58px] bg-[#6B9080] rounded-[16px] mt-[24px] text-[#fff] text-[24px]"
            }
          >
            ورود یا ثبت نام
          </Button>
        </form>
      </div>

        <img src="./src/assets/img/charecterLogoLogin.png" alt="" />

    </div>
  );
};

export default AuthSignIn;
