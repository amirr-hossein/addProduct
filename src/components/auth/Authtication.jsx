import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'
const Auth = (props) => {
  const authContext = useContext(AuthContext)
  const loginHandler = () => {
    authContext.login()
  }
  return (
    <div className="bg-[#DCF2F1] flex flex-col justify-center items-center h-[100vh]">
        <p className='text-[#365486] font-regular mb-[23px] text-[40px]'>لطفا برای ادامه وارد شوید</p>
        <button className='h-[74px] rounded-login bg-login p-login w-[292px] text-white font-bold text-[36px]' onClick={loginHandler}>ورورد</button>
    </div>
  )
}
export default Auth