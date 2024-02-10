import React,{StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import AuthContextProvider from "./context/Auth";
import "./assets/index.css";
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
