import Wrapper from "./container/wrapper/wrapper";
import useDarkMode from "./hooks/Them";
import Auth from "./components/auth/Authtication";
import { AuthContext } from "./context/Auth";
import { useContext } from "react";
const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = (
      <>
        <div className="relative">
          <div
            className=""
            style={{
              background: theme === "dark" ? "#0F1035" : "#DCF2F1",
              color: theme === "dark" ? "#DCF2F1" : "#365486",
              transition: ".2s all",
            }}
          >
            <Wrapper theme={theme} />
          </div>
          <div className="absolute top-0 right-0">
            <button
              type="button"
              className="w-[200px] h-[74px] mt-[36px] mr-[33px] rounded-[20px] opacity-[70%] text-[30px] font-bold"
              style={{
                backgroundColor:theme==="dark"?"#7FC7D9":"#0F1035",
                color: theme === "dark" ? "#000" : "#DCF2F1",
              }}
              onClick={toggleTheme}
            >
              {theme==="dark"?<p>تاریک</p>:<p>روشن</p>}
            </button>
          </div>
        </div>
      </>
    );
  }
  return content;
};
export default App;
