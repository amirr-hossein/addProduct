import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';

const AuthSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);

  const signUpHandler = async (e) => {
    e.preventDefault();
    authContext.signup(email, password);
  };

  return (
    <div>
      <h2>ثبت‌نام</h2>
      <form onSubmit={signUpHandler}>
        <label>
          ایمیل:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          رمز عبور:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
};

export default AuthSignUp;
