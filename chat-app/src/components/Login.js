import React, {useState} from 'react'
import { decrypt } from '../func/security_fn';
const Login = ({onFormSwitch, users, onSetUser}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      let loginSuccess = false
      let foundUser = {}
      users.forEach(user => {
        if(user.email === email && decrypt(user.pass) === pass) {
          loginSuccess = true
          foundUser = user
        }
      });
      if(loginSuccess) {
        onSetUser(foundUser)
        onFormSwitch('chat')
      }
  }

  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email goes here" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login
