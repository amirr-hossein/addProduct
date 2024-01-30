import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'
const Auth = (props) => {
  const authContext = useContext(AuthContext)

  const loginHandler = () => {
    authContext.login()
  }

  return (
    <div className="auth">
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورورد</button>
    </div>
  )
}

export default Auth