import Wrapper from "./container/wrapper/wrapper";
import useDarkMode from "./hooks/Them";
import { AuthContext } from "./context/Auth";
import { useContext } from "react";
import AuthSignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const authContext = useContext(AuthContext);
  function getEmailUsername(email) {
    const emailParts = email.split("@");
    if (emailParts.length >= 2) {
      return emailParts[0];
    }
    return email;
  }
  let content;
  if (!authContext.isAuth) {
    content = (
      <>
        {authContext.user ? (
          <><Login/><AuthSignUp/></>
        ) : (
          <>
            <Login /> <AuthSignUp />
          </>
        )}
      </>
    );
  } else {
    content = (
      <>
        <div className="relative">
          <div
            className="relative h-[100vh]"
            style={{
              background: theme === "dark" ? "#0F1035" : "#DCF2F1",
              color: theme === "dark" ? "#DCF2F1" : "#365486",
              transition: ".2s all",
            }}
          >
            <Wrapper theme={theme} />
          </div>
          <div className="absolute top-0 right-0">
            {authContext.user && (
              <>
                <p style={{ color: "black" }}>
                  {getEmailUsername(authContext.user.email)}
                </p>
                <button
                  type="button"
                  className="w-[200px] h-[74px] mt-[36px] mr-[33px] rounded-[20px] opacity-[70%] text-[30px] font-bold"
                  style={{
                    backgroundColor: theme === "dark" ? "#7FC7D9" : "#0F1035",
                    color: theme === "dark" ? "#000" : "#DCF2F1",
                  }}
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? <p>تاریک</p> : <p>روشن</p>}
                </button>
                <button
                  type="button"
                  className="w-[200px] h-[74px] mt-[36px] mr-[33px] rounded-[20px] opacity-[70%] text-[30px] font-bold"
                  style={{
                    backgroundColor: "#FF0000",
                    color: "#FFFFFF",
                  }}
                  onClick={authContext.logout}
                >
                  خروج
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return content;
};
export default App;
