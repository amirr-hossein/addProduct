import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';

const AuthSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);

  const signInHandler = async (e) => {
    e.preventDefault();
    authContext.login(email, password);
  };

  return (
    <div>
      <h2>ورود</h2>
      <form onSubmit={signInHandler}>
        <label>
          ایمیل:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          رمز عبور:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">ورود</button>
      </form>
    </div>
  );
};

export default AuthSignIn;
