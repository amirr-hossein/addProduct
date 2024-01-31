import React, { useContext } from "react";
import Shop from "./container/Shop/Shop";
import Auth from "./components/auth/Authtication";
import { AuthContext } from "./context/Auth";
import useDarkMode from "./hooks/Them";
const App = (props) => {
  const [theme, toggleTheme] = useDarkMode();
  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = (
      <>
        <div
          className="app"
          style={{
            background: theme === "dark" ? "#381f1f" : "#ffffff",
            color: theme === "dark" ? "#ffffff" : "#212121",
            transition: ".2s all",
          }}
        >
          <Shop />
          <button type="button" className="" onClick={toggleTheme}>
            تغیر تم
          </button>
        </div>
      </>
    );
  }
  return content;
};
export default App;
