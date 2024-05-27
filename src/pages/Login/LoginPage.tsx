import React, { useState, ChangeEvent, FormEvent } from 'react';
import './LoginPage.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

interface User {
  name: string;
  email: string;
  password: string;
}

const LoginSignup: React.FC = () => {
  const [action, setAction] = useState<string>("Login");

  // const [user, setUser] = useState<User>({ name: '', email: '', password: '' });

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value
  //   });
  // };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // Handle form submission here
  //   console.log(user);
  // };

  return (
    <div className="background">
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password ? <span>Click Here</span></div>}
        </div>

        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>

      </div>
      <div className="banner-container">
        <img className="banner" src="../../../public/login-banner.jpg" />
      </div>
    </div>

  );
};

export default LoginSignup;