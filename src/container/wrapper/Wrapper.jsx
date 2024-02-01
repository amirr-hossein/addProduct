import React, { useContext } from "react";
import Shop from "../Shop/Shop";
import Auth from "../../components/auth/Authtication";
import { AuthContext } from "../../context/Auth";
import useDarkMode from "../../hooks/Them";
const Wrapper = (props) => {
  const [theme, toggleTheme] = useDarkMode();
  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = (
      <>
        <div
          className="app h-[100vh] flex justify-center items-center flex-col"
        >
          <Shop themeForm={props.theme} />
        </div>
      </>
    );
  }
  return content;
};
export default Wrapper;