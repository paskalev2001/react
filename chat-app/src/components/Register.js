import React, {useState} from 'react'
import {encrypt} from '../func/security_fn';
const Register = ({onFormSwitch, onCreateUser, users}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let registrationSuccess = true;
    users.forEach(user => {
      if(user.email === email) {
        alert("this email is already registered")
        registrationSuccess = false
      }
    });

    if (registrationSuccess){
      onCreateUser({email, pass: encrypt(pass), full_name: name})
      onFormSwitch('login')
    }
  }
  return (
    <div className="auth-form-container">
          <h2>Register</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
          <label htmlFor="email"></label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email goes here" id="email" name="email" />
          <label htmlFor="password"></label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
          <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register
